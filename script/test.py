import pandas as pd

test = pd.DataFrame({'name':['a','b','c','d'],'grade': [1,2,3,4],'price': [2 ,5 ,8 ,3]})
print(test)
x = test.price.apply(lambda x : x%2== 0)
print(test.loc[x])


