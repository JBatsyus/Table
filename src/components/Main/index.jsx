import "./main.scss";
import AddButton from "../AddButton/index.jsx";
import Form from "../Form/index.jsx";
import Table from "../Table/index.jsx";
import Search from "../Search/index.jsx";
import { useState } from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const Main = () => {
  const theme = createTheme({
    palette: {
      background: {
        paper: "#dce2d1",
      },
      text: {
        primary: "#1f4f41",
        secondary: "#56776c",
      },
    },
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main className="main">
      <div className="position">
        <AddButton onClick={handleClickOpen} />
        <Search />
      </div>
      <ThemeProvider theme={theme}>
        <Dialog
          sx={{
            ".MuiDialog-paper": {
              bgcolor: "background.paper",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            sx={{ color: "text.primary", fontSize: 25, fontWeight: "medium" }}
            id="form-dialog-title"
          >
            Новый студент
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                color: "text.secondary",
                fontSize: 20,
              }}
            >
              Заполните, пожалуйста, форму
            </DialogContentText>
            <Form></Form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ color: "text.primary", fontSize: 15, fontWeight: "small" }}
              color="primary"
            >
              Закрыть
            </Button>
            <Button
              onClick={handleClose}
              sx={{ color: "text.primary", fontSize: 15, fontWeight: "small" }}
              color="primary"
            >
              Добавить
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      <Table></Table>
    </main>
  );
};

export default Main;
