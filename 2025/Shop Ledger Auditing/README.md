# Shop Inventory

## Problem 1

### Introduction

You have become the chief financial officer for your local fantasy town. Your first job is to review a ledger of
the attempted transactions the city's main shop made when the last supply caravan arrived. The goal is to calculate
the shop's final balance of available coins given a series of transactions appearing in a ledger.

The ledger has 5 types of lines:

BALANCE <starting_balance>
PRICE <item_name> <item_price>
AVAILABLE <item_name> <num_items>
PURCHASE <item_name> <num_items>
SELL <item_name>

Three of the commands help track metadata about the town's shop and items that can be purchased and sold by the shop:

* BALANCE:
    * <starting_balance> - Integer - A positive number of coins the shop has available for spending at
      the start of the ledger. BALANCE should only appear as the first line in a ledger file. If it appears later in the
      file, ignore that line when processing the ledger.
* PRICE:
    * <item_name> - String - Name of an item.
    * <item_value> - Integer - The current number of coins this type of item is worth if purchased or sold.
* SET_AVAILABLE:
    * <item_name> - String - Name of an item.
    * <num_items> - Integer - The current number of this item available in the caravan for purchase.

Two of the commands are related to purchasing and selling items. The shop purchases items from the caravan, and sells
them to anonymous customers (not back to the caravan):

* PURCHASE:
    * <item_name> - String - Name of an item.
    * <num_items> - Integer - Number of this item to attempt to purchase from the caravan. See note below for rules
      related to purchasing items.
* SELL:
    * <item_name> - String - Name of an item to sell. See note below for rules related to selling items.

#### PURCHASE Items From the Caravan

When attempting to purchase items from the caravan, the shop tries to buy <num_items> of that item from the caravan
using the latest PRICE information for that item. There are several rules that will change how many items are purchased:
1. Ignore the PURCHASE command if the item does not have a known, positive price.
2. Ignore the PURCHASE command if the item does not have a positive number of the item currently available in the caravan.
3. The shop cannot purchase more items than are available at the caravan. If the command `PURCHASE potion 5` is being
   processed, but the market only has `3 potion` items available, then a maximum of `3` items can be purchased.
4. The shop can only purchase as many items as it can afford based on its current balance. For example, suppose
   `100 potion` items are available on the caravan and the current price is `10`. If the command is `PURCHASE potion 100`,
   then a shop with a current balance of `9` coins would purchase no items, a shop with a balance of `99` would purchase
   `9` items, etc.

When purchasing items, the shop's current balance of available coins needs to be updated based on the total purchase
price (following the rules above to find out how many items were purchased).

#### SELL Items From the Shop's Inventory to Anonymous Customers

When the shop sells an item, it sells all of that item type it has on hand using the last known PRICE information
for the item. The shop does not give away items, so the current price of an item must be a known, positive value
for the transaction to take place. When items are sold, update the shop's current balance based on the number of items
sold and the current price of that item.

Suppose a shop has `balance` of `50`, `10 potion` and `5 sword` in stock. The current price of `potion` is `2` and the
current price of `sword` is `0`. The command `SELL potion` results in `10 potion` selling for `2 coin` each. The shop's
balance increases to `70` and there are `0 potion` in stock. A command of `SELL sword` does nothing, as `sword` is
currently selling for `0`. The command `SELL wagon` also does nothing since there are no `wagon` items in stock.

### Example

This section walks through the commands in example-001.txt line-by-line as an example of how processing a ledger works.

```text
BALANCE 10
PRICE sword 4
PRICE shield 7
PURCHASE sword 1
SET_AVAILABLE sword 2
PURCHASE sword 1
PURCHASE sword 1
PURCHASE sword 1
SET_AVAILABLE sword 7
PRICE sword 2
PURCHASE sword 100
PRICE sword 3
SELL sword
SELL sword
```

1. `BALANCE 10` -- The shop's balance is `10`. No items in stock. The caravan has no known items.
2. `PRICE sword 4` -- The current known prices are: `sword: 4`.
3. `PRICE shield 7` -- The current known prices are: `sword: 4, shield: 7`.
4. `PURCHASE sword 1` -- No `sword` available in the caravan. No purchase happens.
5. `SET_AVAILABLE sword 2` -- The current available items are `sword: 2`
6. `PURCHASE sword 1` -- `1` sword purchased for `4 coin`. Balance is updated to `6`. Current available items are `sword: 1`.
7. `PURCHASE sword 1` -- `1` sword purchased for `4 coin`. Balance is updated to `2`. No items available in the caravan. Shop items
   are `sword: 2`.
8. `PURCHASE sword 1` -- No `sword` available in the caravan. No purchase happens.
9. `SET_AVAILABLE sword 7` -- The current available items are `sword: 7`.
10. `PRICE sword 2` -- The current known prices are: `sword: 2, shield: 7`.
11. `PURCHASE sword 100` -- `1` sword purchased for `2 coin`. Balance is updated to `0`. Current available items are `sword: 6`.
    Shop items are `sword: 3`
12. `PRICE sword 3` -- The current known prices are: `sword: 3, shield: 7`.
13. `SELL sword` -- `3` swords sold. Balance is `9`. Shop has no items.
14. `SELL sword` -- No `sword` to sell. No updates.

The shop's final balance and answer to the problem is `9`. The `md5` hash of this value to submit would be
`45c48cce2e2d7fbdea1afc51c7c6ad26`.

### Inputs

The input for this problem is in input-001.txt.gz. The file is in gzip format, so make sure you decompress the file when
you read it. You should read and process the commands in this file in order to calculate the final shop balance.

### Outputs

The calculated value the program should output will be an integer >= 0. Make sure to `md5` hash the value before
submitting it as your answer for eWeek.
