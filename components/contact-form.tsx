"use client";

import React, { useState, useLayoutEffect } from 'react';

export default function ContactUs() {

    const [submitted, setSubmitted] = useState(false);

    useLayoutEffect(() => {
        if(typeof window != 'undefined' && window.location.search.includes('message')){
            setSubmitted(true);
        }
    }, []);

    return <>
            { submitted ?
                <div className="max-w-sm mx-auto bg-white">
                    <h4 className="h4">Message Recieved, Thank You!</h4>
                </div>
            :
                <div className="max-w-sm mx-auto bg-white">
                    {
                    //@ts-ignore
                    <form name="contact" data-netlify="true">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name</label>
                            <input id="email" type="text" className="form-input w-full text-gray-800" name="name" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-input w-full text-gray-800" name="email" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                            <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Whats up?</label>
                            <textarea className="form-textarea w-full text-gray-800" rows={4} name="message" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" name="Subscribe" />
                                <span className="text-gray-600 ml-2">Let me know about future shenanigans</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mt-6">
                            <div className="w-full px-3">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                    }
                </div>
            }
    </>
}