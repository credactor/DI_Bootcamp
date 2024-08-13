# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

class Currency():
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        text = f"{str(self.amount)} {self.currency}"
        if self.amount != 1:
            text += "s"
        return (text)

    def __int__(self):
        return (int(self.amount))

    def __repr__(self):
        text = f"{str(self.amount)} {self.currency}"
        if self.amount != 1:
            text += "s"
        return (text)
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                total = self.amount + other.amount
                text = f"{total} {self.currency}"
                if total != 1:
                    text += "s"
                return (text)
            else:
                raise Exception (f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            total = self.amount + int(other)
            text = f"{total} {self.currency}"
            if total != 1:
                    text += "s"
            return (text)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                total = self.amount + other.amount
            else:
                raise Exception (f"TypeError: Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            total = self.amount + other
        return Currency(self.currency, total)


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(c1)
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)