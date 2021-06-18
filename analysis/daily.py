'''
Endpoint analysis:
Analysis of https://covid19.mathdro.id/api/daily
'''

import pandas as pd
import json

# with open('./data/daily.json') as data_file:
# 	data = json.load(data_file)

# df = pd.json_normalize(data, 'confirmed', ['total', 'china', 'outsideChina'],
# 	record_prefix="confirmed_")

df = pd.read_json('./data/daily.json')

# reportDate = df['reportDate']

# confirmed_flatten = \
# 	pd.json_normalize(data=df['confirmed'], \
# 		record_path=['total', 'china', 'outsideChina'])
# deltaConfirmedDetail_flatten = \
# 	pd.json_normalize(data=df['deltaConfirmedDetail'], \
# 		record_path=['total', 'china', 'outsideChina'])
# deaths_flatten = \
# 	pd.json_normalize(data=df['deaths'], \
# 		record_path=['total', 'china', 'outsideChina'])
# recovered_flatten = \
# 	pd.json_normalize(data=df['recovered'], \
# 		record_path=['total', 'china', 'outsideChina'])

# new_frames = [reportDate, confirmed_flatten, deltaConfirmedDetail_flatten, \
# 	deaths_flatten, recovered_flatten]

# df_with_flatten_data = pd.concat(new_frames)
