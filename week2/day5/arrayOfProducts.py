nums1 = [5, 1, 4, 2]


def func(array):
    products = [1 for _ in range(len(list))]
    for i in range(len(array)):
        runningProduct = 1
        # this will run len(array)^2 times and J will finish before I does
        for j in range(len(array)):
            if i != j:
                runningProduct *= array[j]
        # we need to do this to guarantee the size of the result list is equal to the size of the original list
        products[i] = runningProduct
    return products
    pass
