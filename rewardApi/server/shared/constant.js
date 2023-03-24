const mockData = [
  {
    userId: 1,
    price: 120,
    rewards: 90,
    transactionDate: new Date("2022-12-20"),
  },
  {
    userId: 2,
    price: 120,
    rewards: 90,
    transactionDate: new Date("2022-12-24"),
  },
  {
    userId: 3,
    price: 50,
    rewards: 0,
    transactionDate: new Date("2022-12-25"),
  },
  {
    userId: 4,
    price: 100,
    rewards: 50,
    transactionDate: new Date("2023-01-20"),
  },
  {
    userId: 5,
    price: 230,
    rewards: 310,
    transactionDate: new Date("2023-02-21"),
  },
  {
    userId: 1,
    price: 320,
    rewards: 490,
    transactionDate: new Date("2023-02-26"),
  },
  {
    userId: 2,
    price: 200,
    rewards: 250,
    transactionDate: new Date("2023-03-01"),
  },
];
 const FILTER_TRANSACTION={
  ALL:0,
  TOTAL_REWARDS:1,
  PER_MONTH_REWARD:2,
  THREE_MONTH:3,
}

module.exports= {mockData, FILTER_TRANSACTION}
