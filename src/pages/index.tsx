import type {NextPage} from 'next'
import Head from 'next/head'

import Counter from '../features/posts/Post'
import styles from '../styles/Home.module.scss'
import {Button, TextField} from "@mui/material";
import {InputOutlined} from "@mui/icons-material";
import React, {useRef} from "react";
import {useRouter} from "next/router";

const pageHandler = (ref: React.RefObject<HTMLInputElement>, router) => {
    if (ref.current?.value) {
        if (typeof Number(ref.current.value) === "number") {
            router.push(`posts/${ref.current.value}`)
        } else {
            alert("invalid post number")
        }
    }
}

const IndexPage: NextPage = () => {
    const inputRef = useRef(null)
    const router = useRouter();

    return (
        <div>
            <TextField inputRef={inputRef} aria-placeholder={"enter a post number to go!"}/>
            <Button onClick={() => pageHandler(inputRef, router)} title={"go!"}>
                go!
            </Button>
        </div>
    )
}

export default IndexPage
