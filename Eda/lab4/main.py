import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV, train_test_split, StratifiedKFold

df = pd.read_csv("gfnsteam.csv")

X = df.values[:, 5:8]
y = df.values[:, 0]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=100)


def Predict(kernel='linear', c=1, gamma='scale'):
    clf = SVC(kernel=kernel, C=c, gamma=gamma)
    clf1 = clf.fit(X_train, y_train)

    y_pred = clf1.predict(X_test)
    print("Accuracy: ", accuracy_score(y_test, y_pred) * 100)

    print(confusion_matrix(y_test, y_pred))


# -----

def plotSVC(title, svc):
    # create a mesh to plot in
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    h = (x_max - x_min) / 100
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
    plt.subplot(1, 1, 1)
    xy = np.vstack([xx.ravel(), yy.ravel()]).T
    z = svc.decision_function(xy)
    z = z.reshape(xx.shape)
    plt.contourf(xx, yy, z, cmap=plt.cm.Paired, alpha=0.8)
    plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired)
    plt.xlabel('Sepal length')
    plt.ylabel('Sepal width')
    plt.xlim(xx.min(), xx.max())
    plt.title(title)
    plt.show()
    pass


def svc_param_selection():
    param_grid = [{'kernel': ['rbf'],
                   'C': [0.001, 0.01, 0.1, 1, 10, 100],
                   'gamma': [0.001, 0.01, 0.1, 1, 10, 100]},
                  {'kernel': ['linear'],
                   'C': [0.001, 0.01, 0.1, 1, 10, 100]}]

    kfold = StratifiedKFold(n_splits=3, shuffle=True, random_state=100)
    grid_search = GridSearchCV(SVC(), param_grid, scoring="accuracy", cv=kfold, verbose=1)
    grid_result = grid_search.fit(X_train, y_train)
    svc = grid_result.best_params_
    # summarize results
    print("Best: %f using %s" % (grid_result.best_score_, grid_result.best_params_))

    return svc


Predict()  # запуск ф-ї із дефолтними параметрами

rez = svc_param_selection()  # пошук найкращих параметрів

if rez.get('gamma') != None:
    Predict(rez.get("kernel"), rez.get("C"), rez.get("gamma"))  # підставлення найкращого параметру у функцію
else:
    Predict(rez.get("kernel"), rez.get("C"))  # підставлення найкращого параметру у функцію

