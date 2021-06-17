'''
Endpoint analysis:
Analysis of https://covid19.mathdro.id/api/confirmed
'''


import pandas as pd

df = pd.read_json('./data/confirmed.json')

# Describe the data
df.describe()

# Show column names
df.columns

# 
df['admin2'].isna().sum()

df['admin2'].unique()

df['admin2'].unique().size

# Calculate null value based on columns
df.isna().sum(axis=0)

# 
df['fips'].dtype

# Show all datatypes for the columns
df.dtypes