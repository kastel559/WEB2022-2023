if __name__ == '__main__':
    gs=[[input(),float(input())] for i in range(int(input()))]
    gs.sort()
    ts=dict(gs)
    g=(min(ts.values()))
    h=ts.values()
    k=[y for x,y in ts.items() if y!=g]
    for x,y in ts.items():
        if y==min(k):
            print(x)