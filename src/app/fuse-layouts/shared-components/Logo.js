import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { userRoleTitleConverter } from 'app/utils';

const useStyles = makeStyles(theme => ({
    root: {
        '& .logo-icon': {
            // width: 24,
            height: 30,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            })
        },
        '& .react-badge, & .logo-text': {
            fontWeight: 800,
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#61DAFB'
    }
}));

function Logo() {
    const classes = useStyles();
    const role = useSelector(({ auth }) => auth.user.role);

    return (
        <div className={clsx(classes.root, "flex items-center")}>
            <img className="logo-icon" src="assets/images/logos/logo-folded.jpg" alt="logo" />
            <Typography className="text-16 ml-12 font-light logo-text" color="textPrimary">YS</Typography>
            <div className={clsx(classes.reactBadge, "react-badge flex items-center ml-12 mr-8 py-4 pl-8 pr-24 rounded-12")}>
                {/* <img
                    className="react-logo"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                    alt="react"
                    width="16"
                />
                <span className="react-text text-12 ml-4 whitespace-no-wrap">{role}</span> */}
                <img
                    className="react-logo mr-4"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5Ny42OCA0OTcuNjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Ny42OCA0OTcuNjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkIyMzM7IiBkPSJNNDY0LjA0LDQwNC44MmMwLDk3LjYtOTYsOTItMjE1LjIsOTJzLTIxNS4yLDQuOC0yMTUuMi05MmMwLTk3LjYsOTYtMjYwLDIxNS4yLTI2MA0KCUMzNjguMDQsMTQ1LjYyLDQ2NC4wNCwzMDguMDIsNDY0LjA0LDQwNC44MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDk4MUQ7IiBkPSJNMjQ4Ljg0LDE0NS42MmMxMTkuMiwwLDIxNS4yLDE2Mi40LDIxNS4yLDI2MHMtOTYsOTItMjE1LjIsOTIiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkIyMzM7IiBkPSJNMTQ0LjA0LDQ0LjgyYzAtNDcuMiw0Ny4yLTQ0LjgsMTA0LjgtNDQuOHMxMDQuOC0yLjQsMTA0LjgsNDQuOHMtNDcuMiwxMjYuNC0xMDQuOCwxMjYuNA0KCVMxNDQuMDQsOTIuMDIsMTQ0LjA0LDQ0LjgyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0REOTgxRDsiIGQ9Ik0yNDguODQsMC4wMmM1Ny42LDAsMTA0LjgtMi40LDEwNC44LDQ0LjhzLTQ3LjIsMTI2LjQtMTA0LjgsMTI2LjQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwNEFGNzY7IiBkPSJNMzQwLjg0LDE1NC40MmMwLDgtNi40LDE0LjQtMTQuNCwxNC40aC0xNTUuMmMtOCwwLTE0LjQtNi40LTE0LjQtMTQuNHYtNGMwLTgsNi40LTE0LjQsMTQuNC0xNC40DQoJaDE1NmM4LDAsMTQuNCw2LjQsMTQuNCwxNC40djRIMzQwLjg0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwOEM2MTsiIGQ9Ik0xNjguODQsMTM2LjgyaDE1OC40YzgsMCwxNC40LDYuNCwxNC40LDE0LjR2NGMwLDgtOCwxNC40LTE2LDE0LjQiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzA0QUY3NjsiIGN4PSIyNDguODQiIGN5PSIzMzkuMjIiIHI9Ijk2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMDA4QzYxOyIgZD0iTTE4MC44NCwyNzEuMjJjMzcuNi0zNy42LDk4LjQtMzcuNiwxMzYsMHMzNy42LDk4LjQsMCwxMzYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkY2RTE7IiBkPSJNMjQwLjg0LDQxNi44MnYtMjBjLTE2LTAuOC0yNC44LTQtMzItOGw0LjgtMjEuNmM4LDQsMTguNCw4LDMwLjQsOGMxMC40LDAsMTcuNi00LDE3LjYtMTEuMg0KCXMtNS42LTExLjItMjAtMTZjLTIwLTYuNC0zMi44LTE2LTMyLjgtMzMuNmMwLTE2LDcuMi0yOC44LDMxLjItMzIuOHYtMTYuOGgxNnYxNmMxNiwwLjgsMjEuNiwzLjIsMjcuMiw2LjRsLTQuOCwyMC44DQoJYy00LjgtMi40LTEyLjgtNi40LTI2LjQtNi40Yy0xMiwwLTE2LDQuOC0xNiwxMC40YzAsNi40LDYuNCw5LjYsMjIuNCwxNmMyMS42LDgsMzAuNCwxNy42LDMwLjQsMzQuNHMtOC44LDMwLjQtMzIuOCwzNC40djIwSDI0MC44NA0KCXoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkVFQkQ7IiBkPSJNMjQ4Ljg0LDI2NC44MnYzNi44YzAsMCwyLjQsMCw0LDBjMTMuNiwwLDIxLjYsNCwyNi40LDYuNGw0LjgtMjAuOGMtNi40LTMuMi0xMS4yLTYuNC0yNy4yLTYuNHYtMTYNCgkJSDI0OC44NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZFRUJEOyIgZD0iTTI1OS4yNCwzMjcuMjJjLTQtMS42LTgtMy4yLTEwLjQtNHYyNy4yYzgsNCwxMi44LDgsMTIuOCwxMy42YzAsNi40LTQuOCw5LjYtMTIuOCwxMS4ydjQxLjZoOA0KCQl2LTIwLjhjMjQtNCwzMi44LTE3LjYsMzIuOC0zNC40QzI4OS42NCwzNDQuODIsMjgwLjg0LDMzNS4yMiwyNTkuMjQsMzI3LjIyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                    alt="money"
                    width="16"
                />
                <span className="react-text text-12 mx-4 whitespace-no-wrap">{userRoleTitleConverter(role)}</span>
            </div>
        </div>
    );
}

export default Logo;
