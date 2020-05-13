import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={36} height={36} viewBox="0 0 36 36" {...props}>
      <path className="paths"
        data-name="Icon simple-slack"
        d="M7.563 22.747a3.782 3.782 0 11-3.78-3.78h3.78v3.78zm1.906 0a3.782 3.782 0 017.563 0v9.469a3.782 3.782 0 11-7.563 0v-9.469zm3.782-15.184a3.782 3.782 0 113.782-3.78v3.78h-3.782zm0 1.906a3.781 3.781 0 110 7.563H3.783a3.782 3.782 0 110-7.563h9.468zm15.183 3.782a3.783 3.783 0 113.783 3.782h-3.783v-3.782zm-1.9 0a3.782 3.782 0 01-7.565 0V3.783a3.782 3.782 0 117.564 0zm-3.787 15.183a3.783 3.783 0 11-3.78 3.783v-3.783h3.78zm0-1.9a3.782 3.782 0 010-7.565h9.469a3.782 3.782 0 110 7.564z"
        fill="#6d9c75"
      />
    </svg>
  )
}

export default SvgComponent

