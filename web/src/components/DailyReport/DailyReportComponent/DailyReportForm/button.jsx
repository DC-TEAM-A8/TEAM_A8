"use client"

import React, { useEffect, useState } from "react";
import { useFormStatus } from "react-dom"
import { Button } from "../../../Button/Button";

export function SubmitButton() {
  const { pending } = useFormStatus()
  const [ submitStatus, setSubmitState ] = useState(0)
  useEffect(() => {
    if (pending && submitStatus === 0) {
      setSubmitState(1)
    } else if (!pending && submitStatus === 1) {
      setSubmitState(2)
    }
  }, [pending])

  return <Button element="inputSubmit" className="submitButton">
    {
      submitStatus === 1
        ? "送信中..."
        : submitStatus === 2
          ? "送信完了"
          : "送信"
    }
  </Button>
}
