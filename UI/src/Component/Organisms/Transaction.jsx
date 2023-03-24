import React, { useState } from "react";
import { TransactionRecord } from "../Molecules/Transactionrecord";
import { FILTER_TRANSACTION, users } from "../../Contants/Enums";
import CustomButton from "../Atoms/CustomButton";
import TextInput from "../Atoms/TextInput";
import { useStyles } from "./style";
import Heading from "../Atoms/Heading";
import { ClearInput } from "../Hooks/useClearInput";
import {
  getTotalRewards,
  shouldComponentVisible,
} from "../../Utility/Utility";
import CustomListItem from "../Atoms/CustomListItem";
import { FilterIcon } from "../Molecules/FilterIcon";
import { UserSelectBox } from "../Molecules/UserSelectBox";
import { addTransaction, getFilteredRecords, getUserData, loadRecords } from "../../Utility/UserServices";

const Transaction = () => {
  const {
    priceSection,
    inputBox,
    flex,
    btnContainer,
    mrgLeft35,
    mrgLeft44,
    root,
    transaction,
    userContainer,
  } = useStyles();
  const [price, setPrice] = useState();
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState(FILTER_TRANSACTION.ALL);
  const [user, setUser] = useState(users[0]);

  const loadInitialData = async () => {
    const data = await loadRecords();
    if (data && data?.length) {
      setTransactionList(data);
    }
  };
  const loadFilterData = async (filter) => {
    const data = await getFilteredRecords(filter, transactionList, user.userId);
    if (data && data?.data) {
      setTransactionList(data.data);
    }
  };
  const loadUserSpecificData = async (userId) => {
    const data = await getUserData(userId);
    if (data) {
      setTransactionList(data);
    }
  };
  const addRecord = async (price, userId) => {
    const data = await addTransaction(price, userId);
    if (data) {
      setTransactionList(data);
    }
  };
  React.useEffect(() => {
    if(!transactionList.length){
    loadInitialData();
    }
    // eslint-disable-next-line
  }, []);


  const onPriceChange = (event) => {
    if (!Number.isNaN(event.target.value)) {
      setPrice(event.target.value);
    }
  };

  const userChangeHandler = (obj) => {
    if (obj?.userId) {
      setUser(obj);
    }
  };

  const filterChangeHandler = (filter) => {
    setFilter(filter);
    loadFilterData(filter);
  };

  const transactionHandler = () => {
    if (price && !Number.isNaN(price)) {
      addRecord(price, user.userId);
    }
    ClearInput("transaction_input");
    setPrice(null);
  };

  const fetchUserData =(userId)=>{
    loadUserSpecificData(userId)
  }

  return (
    <div className={`${root}`}>
      <div className={`${userContainer}`}>
        <UserSelectBox
          userList={users}
          onChangeHandler={userChangeHandler}
          selectedFilter={user}
        />
      </div>
      <div className={priceSection}>
        <div className={inputBox}>
          <TextInput
            id="transaction_input"
            type="number"
            onChange={onPriceChange}
            className={inputBox}
          />
        </div>
        <div className={`${flex} ${btnContainer} ${mrgLeft35}`}>
          <FilterIcon
            selectedFilter={filter}
            onChangeHandler={filterChangeHandler}
          />
        </div>
        <div className={`${flex} ${btnContainer} ${mrgLeft44}`}>
          <CustomButton
            id="Transaction_button"
            onClick={() => transactionHandler()}
            title={"Add"}
          />
        </div>
      </div>

      <div className={`${transaction}`}>
        {transactionList.length &&
        shouldComponentVisible(filter, [
          FILTER_TRANSACTION.THREE_MONTH,
          FILTER_TRANSACTION.ALL,
        ]) ? (
          <TransactionRecord
            transactionList={transactionList}
            fetchUserData={fetchUserData}
            filter={filter}
          />
        ) : null}
        {shouldComponentVisible(filter, [FILTER_TRANSACTION.TOTAL_REWARDS]) && (
          <Heading title={getTotalRewards(transactionList)} />
        )}
        {shouldComponentVisible(filter, [
          FILTER_TRANSACTION.PER_MONTH_REWARD,
        ]) && (
          <CustomListItem items={transactionList} />
        )}
      </div>
    </div>
  );
};

export default Transaction;
