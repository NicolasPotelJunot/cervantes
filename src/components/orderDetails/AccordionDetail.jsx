import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArticleIcon from "@mui/icons-material/Article";
import { Box, Checkbox, FormControl, FormGroup } from "@mui/material";

export const AccordionDetail = ({ title }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.name);
    selectedCheckbox === event.target.name;
    console.log(event.target.name);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            {title}
            <>{selectedCheckbox}</>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl
            sx={{ m: 3, width: "100%" }}
            component="fieldset"
            variant="standard"
          >
            <FormGroup>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  cursor: "pointer",
                  padding: "0 10px",
                }}
                onClick={() =>
                  handleCheckboxChange({ target: { name: "Doble faz" } })
                }
              >
                <Typography>
                  <ArticleIcon /> Doble faz
                </Typography>
                <div>
                  <>$ 825,00</>
                  <Checkbox
                    checked={selectedCheckbox === "Doble faz"}
                    onChange={handleCheckboxChange}
                    name="Doble faz"
                  />
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  cursor: "pointer",
                  padding: "0 10px",
                }}
                onClick={() =>
                  handleCheckboxChange({ target: { name: "Simple faz" } })
                }
              >
                <Typography>
                  <ArticleIcon /> Simple faz
                </Typography>
                <div>
                  <>$ 1100,00</>
                  <Checkbox
                    checked={selectedCheckbox === "Simple faz"}
                    onChange={handleCheckboxChange}
                    name="Simple faz"
                  />
                </div>
              </Box>
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
