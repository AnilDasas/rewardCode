import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root:{
        padding: "8px 5px 10px 8px",
        display:'flex',
        flexDirection:'column'
    },
    userContainer:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: "center",
      marginLeft: '108px',
      background: '#3f51b5',
      width: '120px',
      borderRadius: '10px'
  },
    priceSection: {
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
      padding: "50px"
    },
    inputBox: {
      width: "80%",
      borderRadius: "20px",
      marginRight: "10px",
      position: "absolute"
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    btnContainer: { 
        padding: "8px 5px 10px 8px",
        marginBottom: "10px",
        marginRight: "15px",
        marginTop:"35px",
        position: "absolute",
        },
     mrgLeft44:{
        marginLeft: "44%",
     },
     mrgLeft35:{
        marginLeft: "35%",
     }, 
    transaction:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "27px",
        marginLeft: "6%",
        marginRight: "23%",
    }
  }));