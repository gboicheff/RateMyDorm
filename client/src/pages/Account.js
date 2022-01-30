import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function Account(props) {

    return (
        <div className="Account">
            {
                props.account
                ?
                <div>
                    <h1>{props.account.name}</h1>
                    <h1>{props.account.email}</h1>
                    <Button variant="outlined" href="/api/auth/logout/">Logout</Button>
                </div>
                :
                <h1>Please login to view account</h1>
            }
        </div>
    );
}

export default Account;
