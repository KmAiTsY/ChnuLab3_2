import os
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
pd.set_option('display.max_columns', 100)
pd.set_option('display.max_rows', 1000)

df = pd.read_csv('StudentsPerformance.csv')

# print(df)
# print(df.shape)
# print(df.columns)
# print(df.info())

# delete null
# for j in df.columns:
#     df = df.loc[df[j].notnull()]
# print(df)

# change nan values
for j in df.columns:
    df = df.replace({j: {np.nan : 0}})
print(df)
    # new_df.reset_index(drop=True, inplace=True)
    # new_df
# new_df.to_csv('filtered.csv')