import React from 'react';
import { Icon, Input, Paper, Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { Link } from 'react-router-dom';

function Error404Page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-16">
      <div className="max-w-512 text-center">
        <FuseAnimate animation="transition.expandIn" delay={100}>
          <Typography
            variant="h1"
            color="inherit"
            className="font-medium mb-16"
          >
            404
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={500}>
          <Typography variant="h5" color="textSecondary" className="mb-16">
            我們找不到您要查找的頁面
          </Typography>
        </FuseAnimate>

        <Paper
          className="flex items-center w-full h-56 p-16 mt-48 mb-16 rounded-full"
          elevation={1}
        >
          <Icon color="action">search</Icon>
          <Input
            placeholder="找點什麼..."
            className="pl-16"
            disableUnderline
            fullWidth
            inputProps={{
              'aria-label': 'Search'
            }}
          />
        </Paper>

        <FuseAnimate delay={500}>
          <Typography variant="h6" color="textSecondary" className="mb-16">
            您要查看的內容可能已被刪除或者暫時不可用
            <br />
            看看其他的頁面吧！
          </Typography>
        </FuseAnimate>

        <Link className="font-medium" to="/home">
          回到首頁
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
