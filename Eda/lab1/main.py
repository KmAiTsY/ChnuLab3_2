# импорт пакетов
import inline as inline
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

# pd.set_option('display.max_columns', 100)
pd.set_option('display.max_rows', 1000)

df = pd.read_csv('StudentsPerformance.csv')

df_numeric = df.select_dtypes(include=[np.number])
numeric_cols = list(df_numeric.columns.values)

df_non_numeric = df.select_dtypes(exclude=[np.number])
non_numeric_cols = list(df_non_numeric.columns.values)

def DeleteNaN(df):
    for col in df.columns:
        df = df.loc[df[col].notnull()]
    print(df)

def ChangeNaN(df):
    for col in df.columns:
        df = df.replace({col: {np.nan : 0}})
    print(df)

def Outlier(df):
    df.boxplot(numeric_cols)
    plt.show()
    for col in numeric_cols:
        Q1 = df[col].quantile([0.25]).values[0]
        Q3 = df[col].quantile([0.75]).values[0]
        intr_qr = Q3 - Q1

        max = Q3 + (1.5 * intr_qr)
        min = Q1 - (1.5 * intr_qr)
        # print(max)
        print(min)

        df.loc[df[col] < min, col] = np.nan
        df.loc[df[col] > max, col] = np.nan
    df.boxplot(numeric_cols)
    plt.show()
    print(df)

def HeatMap(df):
    colours = ['#000099', '#ffff00']
    sns.heatmap(df[df.columns].isnull(), cmap=sns.color_palette(colours))
    plt.show()

def Centring(df):
    for col in numeric_cols:
        avg = df[col].mean()
        dic = dict()
        for j in df[col]:
            dic.update({j: j - avg})
        df = df.replace({col: dic})
    return df

def Normalize(df):
    df = Centring(df)
    for col in numeric_cols:
        avg = df[col].mean()
        std = df[col].std()
        dic = dict()
        for j in df[col]:
            dic.update({j: j/std})
        df = df.replace({col: dic})
    # for i in numeric_cols:
    #     df = df.replace((df[i] - df[i].mean()) / df[i].std())
    # print(df)
    return df

def Dispersion(df):
    for col in numeric_cols:
        print(Normalize(df)[col].var())
        print(Normalize(df)[col].sum())
# DeleteNaN(df)
# ChangeNaN(df)
Outlier(df)

# Centring(df)
# print(df.describe());
# print(Normalize(df))
# Dispersion(df)