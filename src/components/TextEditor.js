import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../css/CustomStyles.css'
import {Paper} from "@mui/material";
import {useThemeContext} from "../containers/ThemeProvider";

const TextEditor = ({content, setContent}) => {
    const {mode} = useThemeContext();
    const modules = {
        toolbar: [
            [{'header': '1'}, {'header': '2'}, {'font': []}],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'},
                {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // Toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    console.log(mode);
    return (
        <Paper style={{padding: 20}}>
            <div className={mode === "dark" ? 'quill-dark' : ''}>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                />
            </div>
        </Paper>
    );
};

export default TextEditor;
