import { FILTER_TRANSACTION } from "../../Contants/Enums";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
const Filter = (props) => {
  const { onChangeHandler, selectedFilter } = props;
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="filter" name="filter" >
        <FormControlLabel
          value={FILTER_TRANSACTION.ALL}
          checked={selectedFilter === FILTER_TRANSACTION.ALL}
          onChange={()=>onChangeHandler(FILTER_TRANSACTION.ALL)}
          control={<Radio color="primary" />}
          label="All Records"
        />
        <FormControlLabel
          value={FILTER_TRANSACTION.THREE_MONTH}
          checked={selectedFilter === FILTER_TRANSACTION.THREE_MONTH}
          control={<Radio color="primary" />}
          onChange={()=>onChangeHandler(FILTER_TRANSACTION.THREE_MONTH)}
          label="Three Month Records"
        />
        <FormControlLabel
          value={FILTER_TRANSACTION.PER_MONTH_REWARD}
          checked={selectedFilter === FILTER_TRANSACTION.PER_MONTH_REWARD}
          onChange={()=>onChangeHandler(FILTER_TRANSACTION.PER_MONTH_REWARD)}
          control={<Radio color="primary" />}
          label="Per Month Reward"
        />
        <FormControlLabel
          value={FILTER_TRANSACTION.TOTAL_REWARDS}
          checked={selectedFilter === FILTER_TRANSACTION.TOTAL_REWARDS}
          control={<Radio color="primary" />}
          onChange={()=>onChangeHandler(FILTER_TRANSACTION.TOTAL_REWARDS)}
          label="Total Rewards"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Filter;
