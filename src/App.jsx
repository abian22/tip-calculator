import { Grid, TextField } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import personIcon from "./assets/images/icon-person.svg";
import { useState } from "react";
import "./App.css";

//need to refactor, split the code into components and change the border color of custom input

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [person, setPerson] = useState(null);
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState(null);


  function handleTipButtonClick(tipPercentage) {
    if (selectedTip === tipPercentage) {
      setSelectedTip(null);
      setTip(null);
    } else {
      setSelectedTip(tipPercentage);
      setTip(tipPercentage);
    }
  }

  function handleCustomInputChange(e) {
    const inputValue = e.target.value.trim();
    const floatValue = parseFloat(inputValue);

    if (Number.isFinite(floatValue) && floatValue >= 0 && floatValue <= 100) {
      setCustomTip(floatValue);
      setTip(floatValue / 100);
    } else {
      setCustomTip(null);
      setTip(selectedTip);
    }
  }

  function getTipButtonStyle(tipPercentage) {
    return {
      width: "100%",
      fontFamily: "Space",
      fontSize: "24px",
      backgroundColor:
        selectedTip === tipPercentage
          ? "hsl(172, 67%, 45%)"
          : "hsl(183, 100%, 15%)",
      color: "white",
      "&:hover": {
        bgcolor: "hsl(172, 67%, 45%)",
      },
    };
  }

  function tipCalculator(bill, tip, person) {
    if (!bill || !tip || !person || bill <= 0 || tip <= 0 || person <= 0) {
      return "0.00";
    }

    const tipAmount = (bill * tip) / person;
    return (Math.floor(tipAmount * 100) / 100).toFixed(2);
  }

  function totalCalculator(bill, tip, person) {
    bill = parseFloat(bill);
    tip = parseFloat(tip);
    person = parseInt(person);
    if (!bill || !tip || !person || bill <= 0 || tip <= 0 || person <= 0) {
      return "0.00";
    }

    const total = (bill + bill * tip) / person;
    return total.toFixed(2);
  }

  function reset() {
    setBill(null);
    setTip(null);
    setPerson(null);
    setSelectedTip(null);
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ height: { md: "100vh" } }}
        alignItems="center"
      >
        <Grid container xs={12} sm={12} md={9} l={6} xl={9}>
          <Grid item xs={12} md={12} display="flex" justifyContent="center">
            <Typography
              sx={{
                display: "flex",
                fontFamily: "Space",
                color: "hsl(183, 100%, 15%)",
                letterSpacing: "7px",
                justifyContent: "center",
                textAlign: "center",
                right: { xs: "40%", sm: "47%" },
                position: "absolute",
                top: {
                  xs: "25px",
                  md: "70px",
                  lg: "50px",
                  xl:"100px"
                },
              }}
            >
              SPLI
              <br></br>
              TTER
            </Typography>
            <Box
              className="card"
              sx={{
                borderRadius: {
                  xs: "30px 30px 0 0",
                  sm: "30px 30px 30px 30px",
                },
                marginTop: "100px",
                bottom: 0,
                width: { xs: "100%" },
                maxWidth: { xs: "100%", md: "60%", lg: "60%", xl: "70%" },
                minWidth: { xs: "100%", sm: "100%", lg: "80%", xl: "70%" },
              }}
            >
              <CardMedia />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Space" }}
                >
                  Bill
                  <span
                    style={{
                      color: "orange",
                      border: "2px",
                      borderColor: "orange",
                      marginLeft: "195px",
                      visibility: bill === "0" ? "visible" : "hidden",
                    }}
                  >
                    Can´t be 0
                  </span>
                </Typography>
                <input
                  placeholder="0"
                  className="inputNumber"
                  type="number"
                  style={{
                    height: "40px",
                    backgroundColor: "hsl(189, 41%, 97%)",
                    fontFamily: "Space",
                    textAlign: "right",
                    padding: "20px",
                    color: "hsl(183, 100%, 15%)",
                    fontSize: "24px",
                    outline: "none",
                    borderColor:
                      parseInt(bill) === 0 ? "orange" : "hsl(172, 67%, 45%)",
                  }}
                  value={bill !== null ? bill : ""}
                  onChange={(e) => setBill(e.target.value)}
                ></input>
                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "42px",
                    fontFamily: "Regular",
                    fontSize: "24px",
                    color: "hsl(185, 41%, 84%)",
                    pointerEvents: "none",
                  }}
                >
                  $
                </span>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Space" }}
                >
                  <br></br>
                  Select Tip %
                </Typography>
                <br></br>
                <Grid container xs={12} sm={6} sx={{ justifyContent: "start" }}>
                  <Grid xs={6} sm={4}>
                    <Box sx={{ marginRight: "10px" }}>
                      <Button
                        className="tipButton"
                        sx={getTipButtonStyle(0.05)}
                        onClick={() => handleTipButtonClick(0.05)}
                      >
                        5 %
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={4}>
                    <Box sx={{ marginRight: "10px" }}>
                      <Button
                        className="tipButton"
                        sx={getTipButtonStyle(0.1)}
                        onClick={() => handleTipButtonClick(0.1)}
                      >
                        10 %
                      </Button>
                    </Box>
                  </Grid>

                  <Grid xs={6} sm={4}>
                    <Box
                      sx={{
                        marginRight: "10px",
                        marginTop: { xs: "20px", sm: "0px" },
                      }}
                    >
                      <Button
                        className="tipButton"
                        sx={getTipButtonStyle(0.15)}
                        onClick={() => handleTipButtonClick(0.15)}
                      >
                        15 %
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={6} sm={4}>
                    <Box sx={{ marginRight: "10px", marginTop: "20px" }}>
                      <Button
                        className="tipButton"
                        sx={getTipButtonStyle(0.25)}
                        onClick={() => handleTipButtonClick(0.25)}
                      >
                        25 %
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={6} sm={4}>
                    <Box sx={{ marginRight: "10px", marginTop: "20px" }}>
                      <Button
                        className="tipButton"
                        sx={getTipButtonStyle(0.5)}
                        onClick={() => handleTipButtonClick(0.5)}
                      >
                        50 %
                      </Button>
                    </Box>
                  </Grid>

                  <Grid xs={6} sm={4}>
                    <Box sx={{ marginRight: "10px", marginTop: "10px" }}>
                      <TextField
                        className="customInput"
                        placeholder="Custom"
                        type="number"
                        InputProps={{
                          style: {
                            width: "100%",
                            top:"10px",
                            height: "56px",
                            textAlign: "right",
                            fontSize: "24px",
                            fontFamily:"space",
                            textAlignLast:"right"
                          },
                        }}
                        
                        value={customTip !== null ? customTip : ""}
                        onChange={handleCustomInputChange}
                      ></TextField>
                    </Box>
                  </Grid>
                </Grid>
                <br></br>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Space" }}
                >
                  Number of people
                  <span
                    style={{
                      color: "orange",
                      marginLeft: "90px",
                      visibility: person === "0" ? "visible" : "hidden",
                    }}
                  >
                    Can´t be 0
                  </span>
                </Typography>

                <input
                  placeholder="0"
                  type="number"
                  className="inputNumber"
                  color="hsl(185, 41%, 84%)"
                  style={{
                    height: "40px",
                    backgroundColor: "hsl(189, 41%, 97%)",
                    fontFamily: "Space",
                    textAlign: "right",
                    padding: "20px",
                    color: "hsl(183, 100%, 15%)",
                    fontSize: "24px",
                    outline: "none",
                    borderColor:
                      parseInt(bill) === 0 ? "orange" : "hsl(172, 67%, 45%)",
                  }}
                  value={person !== null ? person : ""}
                  onChange={(e) => setPerson(e.target.value)}
                ></input>
                {
                  <Box sx={{ position: "relative", bottom: { xs: "30px" } }}>
                    <img
                      src={personIcon}
                      style={{
                        position: "absolute",
                        left: "20px",
                        fontFamily: "Regular",
                        fontSize: "24px",
                        color: "hsl(185, 41%, 84%)",
                        pointerEvents: "none",
                      }}
                    />
                  </Box>
                }

                <Box
                  sx={{
                    height: "260px",
                    border: "solid",
                    marginTop: { xs: "30px", sm: "50px" },
                    borderRadius: "20px",
                    backgroundColor: "hsl(183, 100%, 15%)",
                    position: { sm: "absolute" },
                    right: { sm: "0" },
                    top: "0",
                    marginRight: { sm: "15px" },
                    width: { sm: "46%" },
                  }}
                >
                  <br></br>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        marginLeft: "20px",
                        fontFamily: "space",
                        fontSize: { xs: "16px", sm: "12px" },
                      }}
                    >
                      Tip Amount
                      <br></br>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "12px" },
                          color: "hsl(186, 14%, 43%)",
                          fontFamily: "space",
                        }}
                      >
                        / person
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "right",
                        marginRight: "20px",
                        fontFamily: "Space",
                        color: "hsl(172, 67%, 45%)",
                        fontSize: "34px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      $ {tipCalculator(bill, tip, person)}
                    </Typography>
                  </Grid>
                  <br></br>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        color: "white",
                        marginLeft: "20px",
                        fontFamily: "space",
                        fontSize: { xs: "16px", sm: "12px" },
                      }}
                    >
                      Total
                      <br></br>
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", sm: "12px" },
                          color: "hsl(186, 14%, 43%)",
                          fontFamily: "space",
                        }}
                      >
                        / person
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "right",
                        marginRight: "20px",
                        fontFamily: "Space",
                        color: "hsl(172, 67%, 45%)",
                        fontSize: "34px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      $ {totalCalculator(bill, tip, person)}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent="center" alignItems="center">
                    <Button
                      className="tipButton"
                      sx={{
                        width: "90%",
                        marginTop: "30px",
                        alignContent: "center",
                        fontFamily: "Space",
                        fontSize: "24px",
                        backgroundColor: "hsl(186, 14%, 43%)",
                        color: "hsl(183, 100%, 15%)",
                        "&:hover": {
                          backgroundColor: "hsl(172, 67%, 45%)",
                        },
                      }}
                      onClick={() => reset()}
                    >
                      RESET
                    </Button>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>{/* Actions go here */}</CardActions>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
