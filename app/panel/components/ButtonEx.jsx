import Link from 'next/link'
import React from 'react'

function ButtonEx() {
  return (
    <div className="banner-header-1-0">
        <Link href="/panel/deposit">
            Make a Deposit
        </Link>
        <Link href="/panel/withdraw">
            Withdraw Funds
        </Link>
    </div>
  )
}

export default ButtonEx