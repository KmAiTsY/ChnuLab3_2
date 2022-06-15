import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, confusion_matrix, plot_confusion_matrix
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV, train_test_split, StratifiedKFold
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier

# pd.set_option('display.max_columns', 10)
# pd.set_option('display.max_rows', 1000)

# prepare data
df = pd.read_csv("StudentsPerformance.csv")
df['gender'] = pd.factorize(df['gender'])[0]
df['race/ethnicity'] = pd.factorize(df['race/ethnicity'])[0]
# df['parental level of education'] = pd.factorize(df['parental level of education'])[0]
df['lunch'] = pd.factorize(df['lunch'])[0]
df['test preparation course'] = pd.factorize(df['test preparation course'])[0]

y = df['parental level of education']
df.drop(['parental level of education'], axis=1, inplace=True)

scaled_data = StandardScaler().fit_transform(df)
df = pd.DataFrame(scaled_data, columns=df.columns)

# print(df['parental level of education'].value_counts())

X1 = df.values[:, 5:8]
X2 = df.values
X_train, X_test, y_train, y_test = train_test_split(X1, y, test_size=0.3, random_state=100)


def calcScore(rez_fit, title=''):
    y_pred = rez_fit.predict(X_test)
    print(title)
    print("Accuracy: ", accuracy_score(y_test, y_pred) * 100)
    conf_matricx = confusion_matrix(y_test, y_pred)
    print("Confusion Matrix:\n", conf_matricx)
    plot_confusion_matrix(rez_fit, X_test, y_test, xticks_rotation='vertical')
    plt.show()


def plot1():
    neighbors = np.arange(1, 16)
    train_accuracy = np.empty(len(neighbors))
    test_accuracy = np.empty(len(neighbors))

    for i, k in enumerate(neighbors):
        knn = KNeighborsClassifier(n_neighbors=k)
        knn.fit(X_train, y_train)

        # Compute traning and test data accuracy
        train_accuracy[i] = knn.score(X_train, y_train)
        test_accuracy[i] = knn.score(X_test, y_test)

    plt.plot(neighbors, test_accuracy, label='Testing dataset Accuracy')
    plt.plot(neighbors, train_accuracy, label='Training dataset Accuracy')

    plt.legend()
    plt.xlabel('n_neighbors')
    plt.ylabel('Accuracy')
    plt.show()


def search_best_tree():
    print("----------------------")
    print("Start search best tree")

    tree_params = {'max_depth': range(1, 11),
                   'max_features': range(1, 10)}
    tree_grid = GridSearchCV(DecisionTreeClassifier(random_state=100), tree_params, cv=5, n_jobs=-1, verbose=True)
    tree_grid.fit(X_train, y_train)

    # summarize results
    print("Best: %f using %s" % (tree_grid.best_score_, tree_grid.best_params_))

    return tree_grid


def search_best_knn():
    print("----------------------")
    print("Start search best knn")

    knn_pipe = Pipeline([('scaler', StandardScaler()),
                         ('knn', KNeighborsClassifier(n_jobs=-1))])
    knn_params = {'knn__n_neighbors': range(1, 10)}
    knn_grid = GridSearchCV(knn_pipe, knn_params, cv=5, n_jobs=-1, verbose=True)
    knn_grid.fit(X_train, y_train)

    # summarize results
    print("Best: %f using %s" % (knn_grid.best_score_, knn_grid.best_params_))

    return knn_grid


print("My test data")

tree = DecisionTreeClassifier(random_state=100, class_weight='balanced')
knn = KNeighborsClassifier()
tree.fit(X_train, y_train)
knn.fit(X_train, y_train)
# вище генерую власні параметри для DecisionTree i knn

calcScore(tree, "tree")  # виводжу якість обох моделей
calcScore(knn, "knn")

# ---- початок підбору найкращих параметрів для обох моделей ----
# ---- та одразу виведення їх якості ----
rez = search_best_tree()
calcScore(rez, str(rez.best_params_))
rez = search_best_knn()
calcScore(rez, str(rez.best_params_))

plot1()  # візуалізація
