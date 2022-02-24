import inline as inline
import pandas as pd
import numpy as np
import statsmodels.api as sm
import statsmodels.graphics.gofplots
from scipy.stats import norm
from scipy.stats import *
from sklearn import preprocessing
import seaborn as sb
import matplotlib.pyplot as plt
import pylab

pd.set_option('display.max_columns', 100)
pd.set_option('display.max_rows', 1000)

df = pd.read_csv('StudentsPerformance.csv')

df_numeric = df.select_dtypes(include=[np.number])
numeric_cols = list(df_numeric.columns.values)

df_non_numeric = df.select_dtypes(exclude=[np.number])
non_numeric_cols = list(df_non_numeric.columns.values)


def Grouping(df):
    print(df.groupby(by="gender")[numeric_cols].describe(percentiles=[]))
    print(df.groupby(by="race/ethnicity")[numeric_cols].agg([np.mean, np.std, np.min, np.max]))
    print(df.groupby(by="race/ethnicity")[numeric_cols].agg([np.mean, np.std, np.min, np.max]).sort_values(
        by="race/ethnicity",
        ascending=False))


def Crosstab(df):
    print(pd.crosstab(df['gender'], df['race/ethnicity']))


def NormDistr(col='reading score'):
    print("-------------------zd3-------------------")
    rc_log = boxcox(df[col], lmbda=0)
    rc_bc, bc_params = boxcox(df[col])
    print(bc_params)
    df['rc_bc'] = rc_bc
    df['rc_log'] = rc_log

    fig2, (ax1, ax2, ax3) = plt.subplots(3, 1)
    fig2.set_size_inches(18, 9)

    # original review count histogram
    df[col].hist(ax=ax1, bins=100)
    ax1.set_yscale('log')
    ax1.tick_params(labelsize=14)
    ax1.set_title('Review Counts Histogram', fontsize=14)
    ax1.set_xlabel('')
    ax1.set_ylabel('Occurrence', fontsize=14)

    # review count after log transform
    df['rc_log'].hist(ax=ax2, bins=100)
    ax2.set_yscale('log')
    ax2.tick_params(labelsize=14)
    ax2.set_title('Log Transformed Counts Histogram', fontsize=14)
    ax2.set_xlabel('')
    ax2.set_ylabel('Occurrence', fontsize=14)
    # review count after Box-Cox transform
    df['rc_bc'].hist(ax=ax3, bins=100)
    ax3.set_yscale('log')
    ax3.tick_params(labelsize=14)
    ax3.set_title('Box-Cox Transformed Counts Histogram', fontsize=14)
    ax3.set_xlabel('')
    ax3.set_ylabel('Occurrence', fontsize=14)

    plt.show()
    plt.figure(figsize=(10, 10))

    fig2, (ax1, ax2, ax3) = plt.subplots(3, 1)
    fig2.set_size_inches(10, 10)
    prob1 = probplot(df[col], dist=norm, plot=ax1)
    ax1.set_xlabel('')
    ax1.set_title('Probplot Normal')

    prob2 = probplot(df['rc_log'], dist=norm, plot=ax2)
    ax2.set_xlabel('')
    ax2.set_title('Probplot after log transform')

    prob3 = probplot(df['rc_bc'], dist=norm, plot=ax3)
    ax3.set_xlabel('')
    ax3.set_title('Probplot after Box-Cox transform')
    plt.show()

def NormDistr_methods():
    df.hist()#histogram
    plt.show()
    df.plot(kind='box')#plot
    plt.show()
    sm.qqplot(df['reading score'], line='45')#QQ_Graph
    pylab.show()


def Correlation(column1='math score', column2='reading score'):
    xs = df[column1]
    ys = df[column2]
    pd.DataFrame(np.array([xs, ys]).T).plot.scatter(0, 1, s=5, grid=True)
    plt.xlabel(column1)
    plt.ylabel(column2)
    plt.show()


def FeatureEngineering():
    enc = preprocessing.OrdinalEncoder()
    result = enc.fit_transform(df[numeric_cols])
    print(result)



Grouping(df)
Crosstab(df)
NormDistr()
# NormDistr_methods()
Correlation()
FeatureEngineering()
