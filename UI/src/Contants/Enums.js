export const FILTER_TRANSACTION={
  ALL:0,
  TOTAL_REWARDS:1,
  PER_MONTH_REWARD:2,
  THREE_MONTH:3,
}

export const transactionColumn=[
  {
    name:"UserId",
    isVisible:true
  },
  {
  name:"Price",
  isVisible:true
},
{
  name:"Reward",
  isVisible:true
},
{
  name:"Date",
  isVisible:true
}
]

export const users=[{
  userName:'TestUsser1',
  userId:1
},{
  userName:'TestUsser2',
  userId:2
},{
  userName:'TestUsser3',
  userId:3
},{
  userName:'TestUsser4',
  userId:4
}]