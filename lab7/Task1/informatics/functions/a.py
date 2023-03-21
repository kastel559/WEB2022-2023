def min(a,b,c,d):
    m = 10001
    if a < m: m = a
    elif b < m : m = b
    elif c < m : m = c
    else: m = d
    return m

l = list(map(int, input().split()))
print(min(l[0], l[1], l[2], l[3]))