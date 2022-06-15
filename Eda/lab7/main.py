import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score
from sklearn.mixture import GaussianMixture
from sklearn.model_selection import GridSearchCV, train_test_split
from scipy.cluster.hierarchy import dendrogram, linkage

from sklearn.cluster import AgglomerativeClustering
import scipy.cluster.hierarchy as shc

from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("StudentsPerformance.csv")

X = df.values[:, 5:7]
y = df.values[:, 7:8]


def myPlot1(_x, _lable):
    plt.scatter(_x[:, 0], _x[:, 1], c=_lable, cmap='rainbow')  # формуємо кластери в кольорі
    plt.show()  # виводимо їх


# --------------Пошук Оптимального значення 1-------------------

plt.figure(figsize=(10, 7))
plt.title("Students Dendograms")
dend = shc.dendrogram(shc.linkage(X, method='ward'))  # формуємо дендограму
plt.show()  # на візуалізації я зрозумів що для оцінок моїх студентів існує 4 кластери

# --------------Пошук Оптимального значення 2-------------------
wcss = []
for i in range(1, 10):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(X)
    wcss.append(kmeans.inertia_)
plt.plot(range(1, 10), wcss)
plt.title('Elbow Method')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show()

# ---------------------- Ієрархічна кластеризація ----------------------
cluster = AgglomerativeClustering(n_clusters=4, affinity='euclidean', linkage='ward')
# n_clusters це число моїх клатсетрів (4)
# affinity "евклідова" відстань між точками даних
# а linkage має значення "ward", що мінімізує варіант між кластерами
cluster.fit_predict(X)  # навчаємо модель

plt.title('Ієрархічна кластеризація')
myPlot1(X, cluster.labels_)  # малюю за допомогою своєї функції

# ---------------------- DBSCAN ----------------------
# невеличка підготовка
centers = [[1, 1], [-1, -1], [1, -1]]  # центри
Xfit = StandardScaler().fit_transform(X)

cluster2 = DBSCAN(eps=0.3, min_samples=10).fit(Xfit)
core_samples_mask = np.zeros_like(cluster2.labels_, dtype=bool)
core_samples_mask[cluster2.core_sample_indices_] = True

plt.title('DBSCAN')
myPlot1(Xfit, cluster2.labels_)  # малюю за допомогою своєї функції
# все що червоним це є наш кластер, фіолетовим - шум
