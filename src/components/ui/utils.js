import { makeStyles } from "@material-ui/styles";

export const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software Development", link: "/custom-software" },
  { name: "Mobile App Development", link: "/mobile-apps" },
  { name: "Website Development", link: "/websites" },
];

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0rem",
    },
  },
  logo: {
    height: "6rem",
    [theme.breakpoints.down("md")]: {
      height: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3.5rem",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    height: "45px",
    lineHeight: "1.2",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));
