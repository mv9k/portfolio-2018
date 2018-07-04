import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

const tileData = [
    {
        img: 'http://via.placeholder.com/350x350',
        title: 'title',
        author: 'author',
        cols: 2,
        rows: 2,
    },
    {
        img: 'http://via.placeholder.com/350x150',
        title: 'title',
        author: 'author',
        cols: 1,
    },
    {
        img: 'http://via.placeholder.com/350x150',
        title: 'title',
        author: 'author',
        cols: 3,
    },
    {
        img: 'http://via.placeholder.com/350x150',
        title: 'title',
        author: 'author',
        cols: 1,
    },
];

export default tileData