'''
Chapter 06. BFS
Aditya Y. Bhargava, Code for the book Grokking Algorithms
amazon: https://www.amazon.com/gp/product/1617292230/ref=as_li_tl?ie=UTF8&tag=adit074-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1617292230&linkId=8e53f7c690634522f34ef6aca879bc34
github: https://github.com/egonSchiele/grokking_algorithms/tree/master/06_breadth-first_search
'''

from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["jonny"] = []
graph["thom"] = []


def bfs(name) -> bool:
    queue = deque()
    searched = []
    queue += graph[name]

    while queue:
        person = queue.popleft()
        if person not in searched:
            if person_is_seller(person):
                print(person + " is mango seller!")
                return True
            else:
                searched.append(person)
                queue += graph[person]
        else:
            continue

    return False


def person_is_seller(name: str) -> bool:
    return name[-1] == 'm'


bfs("you")
