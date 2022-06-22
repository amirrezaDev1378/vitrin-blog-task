import React, {useCallback, useEffect, useMemo, useState} from 'react'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {
    getPostData,
    selectData
} from './postsSlice'
import styles from './Counter.module.css'
import Head from "next/head";

function Post(id) {
    console.log("ey baba")
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const pageData = useAppSelector(selectData)


    //
    if (id.id && isLoading) {

        dispatch(getPostData(id)).then(() => {
            setIsLoading(false)
        })


    }


    if (!isLoading) {
        const data = JSON.parse(pageData.postData);
        return (
            <>
                <Head>
                    <title>
                        {data.title}
                    </title>
                    <meta name={"description"} content={data.body}/>
                </Head>
                <div>


                    page header : {data.title}
                    <br/>
                    page body : {data.body}
                </div>
            </>
        )
    }
    if (isLoading || pageData.status === "loading") {
        return <h1>"loading"</h1>
    }
}

export default Post
