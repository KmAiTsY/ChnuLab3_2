import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score
from sklearn.mixture import GaussianMixture
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV, train_test_split

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


X1 = df.values[:, 5:8]
X2 = df.values
X_train, X_test, y_train, y_test = train_test_split(X1, y, test_size=0.3, random_state=100)


def calcScore(rez_fit, title=''):
    y_pred = rez_fit.predict(X_test)
    print(title)
    print("Accuracy: ", accuracy_score(y_test, y_pred) * 100)


def search_best_kmean():
    print("----------------------")
    print("Start search best param")

    tree_params = {'n_clusters': range(1, 15)}
    tree_grid = GridSearchCV(KMeans(random_state=100), tree_params, cv=5, n_jobs=-1, verbose=True)
    tree_grid.fit(X_train, y_train)

    # summarize results
    print("Best: %f using %s" % (tree_grid.best_score_, tree_grid.best_params_))

    return tree_grid


def search_best_GaussianMixture():
    print("----------------------")
    print("Start search best param")

    tree_params = {'n_components': range(1, 10)}
    tree_grid = GridSearchCV(GaussianMixture(random_state=100), tree_params, cv=5, n_jobs=-1, verbose=True)
    tree_grid.fit(X_train, y_train)

    # summarize results
    print("Best: %f using %s" % (tree_grid.best_score_, tree_grid.best_params_))

    return tree_grid


print("My default param")
# нище 2 блоки із запуском функції без параметрів
# --------------------Block1----------------------
print("K-Mean")

km = KMeans(n_clusters=5, random_state=0)
km.fit(X_train)
print(km.cluster_centers_.shape)
print(km.labels_.shape)

print(km.predict(X_test).shape)

plt.scatter(X_train[:, 0], X_train[:, 1], c=km.labels_)
plt.show()
# ------------------------------------------
# ---------------------Block2---------------------
print("GaussianMixture")
gmm = GaussianMixture(n_components=3)
gmm.fit(X_train)
print(gmm.means_)
print(gmm.covariances_)

gmm.predict_proba(X_test)
# log probability under the model
print(gmm.score(X_train))
print(gmm.score_samples(X_train).shape)
# ------------------------------------------


# ---- початок підбору найкращих параметрів ----
# ---- та одразу виведення їх якості ----
rez = search_best_kmean()
calcScore(rez, str(rez.best_params_))

rez = search_best_GaussianMixture()
calcScore(rez, str(rez.best_params_))
