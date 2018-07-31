from sklearn import tree

clf = tree.DecisionTreeClassifier()

# CHALLENGE - create 3 more classifiers...
# 1
# 2
# 3

# [height, weight, shoe_size]
X = [[181, 80, 44], [177, 70, 43], [160, 60, 38], [154, 54, 37], [166, 65, 40],
     [190, 90, 47], [175, 64, 39],
     [177, 70, 40], [159, 55, 37], [171, 75, 42], [181, 85, 43], [45, 4, 20],[50, 3, 15],[65, 5, 25]]

Y = ['male', 'male', 'female', 'female', 'male', 'male', 'female', 'female',
     'female', 'male', 'male','baby','baby','baby']


# CHALLENGE - ...and train them on our data
clf = clf.fit(X, Y)

prediction1 = clf.predict([[190, 70, 43]])
prediction2 = clf.predict([[48, 4.8, 18]])

# CHALLENGE compare their reusults and print the best one!

print(prediction1,prediction2)