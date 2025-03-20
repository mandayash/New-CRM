"use client";

import { useState, useEffect } from "react";
import { 
  Edit, Trash, Search, Filter, Table, Download, 
  Plus, Menu, ArrowDown, ArrowUp, ArrowUpDown,
  ChevronLeft, ChevronRight, ScanQrCode,
  FileDown, RefreshCw
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Import modal components
import LihatQRModal from "@/components/qr-management/QRCodeModal";
import DeleteQRModal from "@/components/qr-management/DeleteQRModal";
import DeleteSuccessModal from "@/components/qr-management/DeleteSuccessModal";
import DeleteErrorModal from "@/components/qr-management/DeleteErrorModal";
import DownloadSuccessModal from "@/components/qr-management/DownloadSuccessModal";

const QRStats = () => {
  const stats = [
    {
      title: "Total QR",
      value: 13,
      bgColor: "bg-[#FCDBCA]",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78074 0H8.85766C9.16455 0 9.45887 0.121913 9.67588 0.338919C9.89289 0.555926 10.0148 0.85025 10.0148 1.15714C10.0148 1.46404 9.89289 1.75836 9.67588 1.97537C9.45887 2.19237 9.16455 2.31429 8.85766 2.31429H7.82857C6.73006 2.31429 5.97406 2.31429 5.39086 2.36366C4.81846 2.40994 4.51143 2.4948 4.28926 2.60897C3.78104 2.86786 3.36786 3.28104 3.10897 3.78926C2.9948 4.01143 2.9084 4.31846 2.86211 4.88931C2.81583 5.4756 2.81429 6.23006 2.81429 7.32857V8.35766C2.81429 8.66455 2.69237 8.95887 2.47537 9.17588C2.25836 9.39289 1.96404 9.5148 1.65714 9.5148C1.35025 9.5148 1.05593 9.39289 0.838919 9.17588C0.621913 8.95887 0.5 8.66455 0.5 8.35766V7.28074C0.5 6.24086 0.5 5.39229 0.557086 4.70109C0.614171 3.98674 0.739143 3.34029 1.04617 2.73857C1.52687 1.79532 2.29377 1.02841 3.23703 0.547714C3.84029 0.239143 4.48674 0.115714 5.20109 0.0570856C5.89229 -9.19615e-08 6.74086 0 7.78074 0ZM22.6107 2.36366C22.0229 2.31429 21.2699 2.31429 20.1714 2.31429H19.1423C18.8354 2.31429 18.5411 2.19237 18.3241 1.97537C18.1071 1.75836 17.9852 1.46404 17.9852 1.15714C17.9852 0.85025 18.1071 0.555926 18.3241 0.338919C18.5411 0.121913 18.8354 0 19.1423 0H20.2193C21.2591 0 22.1093 -9.19615e-08 22.7989 0.0570856C23.5133 0.114171 24.1597 0.239143 24.763 0.546172C25.7062 1.02687 26.4731 1.79377 26.9538 2.73703C27.2609 3.34029 27.3858 3.98674 27.4429 4.70109C27.5 5.39074 27.5 6.24086 27.5 7.28074V8.35766C27.5 8.66455 27.3781 8.95887 27.1611 9.17588C26.9441 9.39289 26.6498 9.5148 26.3429 9.5148C26.036 9.5148 25.7416 9.39289 25.5246 9.17588C25.3076 8.95887 25.1857 8.66455 25.1857 8.35766V7.32857C25.1857 6.23006 25.1857 5.47406 25.1363 4.89086C25.0901 4.31846 25.0052 4.01143 24.891 3.78926C24.6321 3.28104 24.219 2.86786 23.7107 2.60897C23.4886 2.4948 23.1815 2.40994 22.6107 2.36366ZM1.65714 17.4852C1.96404 17.4852 2.25836 17.6071 2.47537 17.8241C2.69237 18.0411 2.81429 18.3354 2.81429 18.6423V19.6714C2.81429 20.7699 2.81429 21.5259 2.86366 22.1091C2.90994 22.6815 2.9948 22.9886 3.10897 23.2123C3.36817 23.7199 3.78011 24.1318 4.28926 24.391C4.51143 24.5052 4.81846 24.5916 5.38931 24.6379C5.9756 24.6842 6.73006 24.6857 7.82857 24.6857H8.85766C9.16455 24.6857 9.45887 24.8076 9.67588 25.0246C9.89289 25.2416 10.0148 25.536 10.0148 25.8429C10.0148 26.1498 9.89289 26.4441 9.67588 26.6611C9.45887 26.8781 9.16455 27 8.85766 27H7.78074C6.74086 27 5.89074 27 5.20109 26.9429C4.48674 26.8858 3.84029 26.7609 3.23857 26.4538C2.29532 25.9731 1.52841 25.2062 1.04771 24.263C0.739143 23.6597 0.615714 23.0133 0.557086 22.2989C0.5 21.6093 0.5 20.7591 0.5 19.7193V18.6423C0.5 18.3354 0.621913 18.0411 0.838919 17.8241C1.05593 17.6071 1.35025 17.4852 1.65714 17.4852ZM26.3429 17.4852C26.6498 17.4852 26.9441 17.6071 27.1611 17.8241C27.3781 18.0411 27.5 18.3354 27.5 18.6423V19.7193C27.5 20.7591 27.5 21.6093 27.4429 22.2989C27.3858 23.0133 27.2609 23.6597 26.9538 24.263C26.4731 25.2062 25.7062 25.9731 24.763 26.4538C24.1597 26.7609 23.5133 26.8858 22.7989 26.9429C22.1093 27 21.2591 27 20.2193 27H19.1423C18.8354 27 18.5411 26.8781 18.3241 26.6611C18.1071 26.4441 17.9852 26.1498 17.9852 25.8429C17.9852 25.536 18.1071 25.2416 18.3241 25.0246C18.5411 24.8076 18.8354 24.6857 19.1423 24.6857H20.1714C21.2699 24.6857 22.0259 24.6857 22.6091 24.6363C23.1815 24.5901 23.4886 24.5052 23.7123 24.391C24.2199 24.1319 24.6325 23.7187 24.891 23.2107C25.0052 22.9886 25.0916 22.6815 25.1379 22.1107C25.1842 21.5244 25.1857 20.7699 25.1857 19.6714V18.6423C25.1857 18.3354 25.3076 18.0411 25.5246 17.8241C25.7416 17.6071 26.036 17.4852 26.3429 17.4852Z" fill="#CF0000"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.71451 4.62891H9.25759C9.65565 4.62891 10.0198 4.62891 10.3252 4.65359C10.6539 4.68136 11.0134 4.74153 11.3682 4.92359C11.8774 5.18279 12.2909 5.59473 12.5485 6.10388C12.7306 6.45873 12.7923 6.81822 12.8185 7.14685C12.8432 7.45234 12.8432 7.81645 12.8432 8.21451V8.75759C12.8432 9.15565 12.8432 9.51976 12.8185 9.82525C12.7975 10.1872 12.7057 10.5415 12.5485 10.8682C12.29 11.3762 11.8774 11.7894 11.3698 12.0485C11.0149 12.2306 10.6539 12.2923 10.3252 12.3185C10.0198 12.3432 9.65565 12.3432 9.25759 12.3432H8.71451C8.31645 12.3432 7.95234 12.3432 7.64685 12.3185C7.2849 12.2975 6.93058 12.2057 6.60388 12.0485C6.0959 11.79 5.68274 11.3774 5.42359 10.8698C5.26618 10.5426 5.17445 10.1877 5.15359 9.82525C5.12891 9.51976 5.12891 9.15565 5.12891 8.75759V8.21451C5.12891 7.81645 5.12891 7.45234 5.15359 7.14685C5.17465 6.7849 5.26637 6.43058 5.42359 6.10388C5.68248 5.59566 6.09566 5.18248 6.60388 4.92359C6.93058 4.76637 7.2849 4.67465 7.64685 4.65359C7.95234 4.62891 8.31645 4.62891 8.71451 4.62891ZM7.64685 6.98793C7.70797 6.97234 7.77052 6.96304 7.83354 6.96016C8.03411 6.94474 8.30256 6.94319 8.75308 6.94319H9.21594C9.66645 6.94319 9.93645 6.94319 10.1355 6.96016C10.198 6.96314 10.26 6.97245 10.3206 6.98793C10.3896 7.02387 10.446 7.0798 10.4826 7.14839C10.4982 7.20951 10.5075 7.27207 10.5104 7.33508C10.5258 7.53565 10.5274 7.80411 10.5274 8.25462V8.71748C10.5274 9.16799 10.5274 9.43799 10.5104 9.63702C10.5074 9.69952 10.4981 9.76155 10.4826 9.82216C10.4467 9.8911 10.3908 9.94757 10.3222 9.98416C10.261 9.99976 10.1985 10.0091 10.1355 10.0119C9.93491 10.0274 9.66645 10.0289 9.21594 10.0289H8.75308C8.30256 10.0289 8.03256 10.0289 7.83354 10.0119C7.77104 10.009 7.70901 9.99965 7.64839 9.98416C7.57946 9.94823 7.52299 9.8923 7.48639 9.82371C7.4708 9.76259 7.46149 9.70003 7.45862 9.63702C7.44206 9.33081 7.43691 9.02408 7.44319 8.71748V8.25462C7.44319 7.80411 7.44319 7.53411 7.46016 7.33508C7.46314 7.27258 7.47245 7.21055 7.48793 7.14994C7.52387 7.081 7.57826 7.02453 7.64685 6.98793ZM18.7431 4.62891H19.2862C19.6842 4.62891 20.0483 4.62891 20.3538 4.65359C20.6825 4.68136 21.0419 4.74153 21.3983 4.92359C21.9059 5.18279 22.3179 5.59473 22.5771 6.10388C22.7591 6.45873 22.8193 6.81822 22.8471 7.14685C22.8718 7.45234 22.8718 7.81645 22.8718 8.21451V8.75759C22.8718 9.15565 22.8718 9.51976 22.8471 9.82525C22.826 10.1872 22.7343 10.5415 22.5771 10.8682C22.3182 11.3764 21.905 11.7896 21.3968 12.0485C21.0419 12.2306 20.6825 12.2923 20.3538 12.3185C20.0483 12.3432 19.6842 12.3432 19.2862 12.3432H18.7431C18.345 12.3432 17.9809 12.3432 17.6754 12.3185C17.3135 12.2975 16.9592 12.2057 16.6325 12.0485C16.1245 11.79 15.7113 11.3774 15.4522 10.8698C15.2948 10.5426 15.203 10.1877 15.1822 9.82525C15.1575 9.51976 15.1575 9.15565 15.1575 8.75759V8.21451C15.1575 7.81645 15.1575 7.45234 15.1822 7.14685C15.2032 6.7849 15.2949 6.43058 15.4522 6.10388C15.7111 5.59566 16.1242 5.18248 16.6325 4.92359C16.9592 4.76637 17.3135 4.67465 17.6754 4.65359C17.9809 4.62891 18.345 4.62891 18.7431 4.62891ZM17.677 6.98793C17.7381 6.97234 17.8006 6.96304 17.8637 6.96016C18.0642 6.94474 18.3327 6.94319 18.7832 6.94319H19.246C19.6966 6.94319 19.9666 6.94319 20.1656 6.96016C20.2281 6.96314 20.2901 6.97245 20.3507 6.98793C20.4197 7.02387 20.4761 7.0798 20.5127 7.14839C20.5283 7.20951 20.5376 7.27207 20.5405 7.33508C20.5559 7.53565 20.5575 7.80411 20.5575 8.25462V8.71748C20.5575 9.16799 20.5575 9.43799 20.5405 9.63702C20.5375 9.69952 20.5282 9.76155 20.5127 9.82216C20.4764 9.89133 20.4199 9.94782 20.3507 9.98416C20.2901 9.99965 20.2281 10.009 20.1656 10.0119C19.965 10.0274 19.6966 10.0289 19.246 10.0289H18.7832C18.3327 10.0289 18.0627 10.0289 17.8637 10.0119C17.8012 10.009 17.7391 9.99965 17.6785 9.98416C17.6096 9.94823 17.5531 9.8923 17.5165 9.82371C17.5009 9.76259 17.4916 9.70003 17.4887 9.63702C17.4717 9.33082 17.466 9.0241 17.4718 8.71748V8.25462C17.4718 7.80411 17.4718 7.53411 17.4887 7.33508C17.4917 7.27258 17.501 7.21055 17.5165 7.14994C17.5524 7.081 17.6084 7.02453 17.677 6.98793ZM8.71451 14.6575H9.25759C9.65565 14.6575 10.0198 14.6575 10.3252 14.6822C10.6539 14.7099 11.0134 14.7701 11.3682 14.9522C11.8774 15.2098 12.2909 15.6233 12.5485 16.1325C12.7306 16.4873 12.7923 16.8468 12.8185 17.1754C12.8432 17.4809 12.8432 17.845 12.8432 18.2431V18.7862C12.8432 19.1842 12.8432 19.5483 12.8185 19.8538C12.7977 20.2163 12.7059 20.5712 12.5485 20.8983C12.2898 21.4057 11.8772 21.8183 11.3698 22.0771C11.0149 22.2591 10.6539 22.3193 10.3252 22.3471C10.0198 22.3718 9.65565 22.3718 9.25759 22.3718H8.71451C8.31645 22.3718 7.95234 22.3718 7.64685 22.3471C7.2849 22.326 6.93058 22.2343 6.60388 22.0771C6.09566 21.8182 5.68248 21.405 5.42359 20.8968C5.26637 20.5701 5.17465 20.2158 5.15359 19.8538C5.12891 19.5483 5.12891 19.1842 5.12891 18.7862V18.2431C5.12891 17.845 5.12891 17.4809 5.15359 17.1754C5.17465 16.8135 5.26637 16.4592 5.42359 16.1325C5.68248 15.6242 6.09566 15.2111 6.60388 14.9522C6.95873 14.7701 7.31822 14.7084 7.64685 14.6822C7.95234 14.6575 8.31645 14.6575 8.71451 14.6575ZM7.64839 17.0165C7.70951 17.0009 7.77207 16.9916 7.83508 16.9887C8.03565 16.9733 8.30411 16.9718 8.75462 16.9718H9.21748C9.66799 16.9718 9.93799 16.9718 10.137 16.9887C10.1995 16.9917 10.2615 17.001 10.3222 17.0165C10.3911 17.0524 10.4476 17.1084 10.4842 17.177C10.4998 17.2381 10.5091 17.3006 10.5119 17.3637C10.5274 17.5642 10.5289 17.8327 10.5289 18.2832V18.7461C10.5289 19.1966 10.5289 19.4666 10.5119 19.6656C10.509 19.7281 10.4997 19.7901 10.4842 19.8507C10.4482 19.9197 10.3923 19.9761 10.3237 20.0127C10.2626 20.0283 10.2 20.0376 10.137 20.0405C9.93645 20.0559 9.66799 20.0575 9.21748 20.0575H8.75462C8.30411 20.0575 8.03411 20.0575 7.83508 20.0405C7.77258 20.0375 7.71055 20.0282 7.64993 20.0127C7.58077 19.9764 7.52428 19.9199 7.48793 19.8507C7.47245 19.7901 7.46314 19.7281 7.46016 19.6656C7.44308 19.3594 7.43742 19.0527 7.44319 18.7461V18.2832C7.44319 17.8327 7.44319 17.5627 7.46016 17.3637C7.46314 17.3012 7.47245 17.2391 7.48793 17.1785C7.52387 17.1096 7.5798 17.0531 7.64839 17.0165ZM16.7003 14.6575C17.0072 14.6575 17.3016 14.7794 17.5186 14.9964C17.7356 15.2134 17.8575 15.5077 17.8575 15.8146V16.9718C17.8575 17.1847 18.0303 17.3575 18.2432 17.3575H20.5575C22.0479 17.3575 23.2575 18.5671 23.2575 20.0575V21.2146C23.2575 21.5215 23.1356 21.8158 22.9186 22.0328C22.7016 22.2499 22.4072 22.3718 22.1003 22.3718C21.7934 22.3718 21.4991 22.2499 21.2821 22.0328C21.0651 21.8158 20.9432 21.5215 20.9432 21.2146V20.0575C20.9432 19.9552 20.9026 19.8571 20.8302 19.7847C20.7579 19.7124 20.6598 19.6718 20.5575 19.6718H18.2432C17.5271 19.6718 16.8404 19.3873 16.334 18.881C15.8277 18.3746 15.5432 17.6878 15.5432 16.9718V15.8146C15.5432 15.5077 15.6651 15.2134 15.8821 14.9964C16.0991 14.7794 16.3934 14.6575 16.7003 14.6575Z" fill="#CF0000"/>
    </svg>,
      valueColor: "text-[#242E2C]",
    },
    {
      title: "Total Stasiun",
      value: 13,
      bgColor: "bg-[#FDF6D5]",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
      <path d="M6.83251 3.66245C6.92462 3.57662 6.9985 3.47312 7.04974 3.35812C7.10098 3.24312 7.12853 3.11898 7.13075 2.9931C7.13297 2.86722 7.10981 2.74219 7.06266 2.62545C7.01551 2.50872 6.94533 2.40267 6.85631 2.31365C6.76728 2.22463 6.66124 2.15445 6.54451 2.10729C6.42777 2.06014 6.30273 2.03699 6.17686 2.03921C6.05098 2.04143 5.92684 2.06898 5.81184 2.12022C5.69684 2.17146 5.59334 2.24534 5.50751 2.33745C4.25555 3.58407 3.26248 5.06597 2.58544 6.69786C1.9084 8.32976 1.56075 10.0794 1.56251 11.8462C1.56041 13.6338 1.916 15.4037 2.60832 17.0517C3.30064 18.6998 4.31571 20.1927 5.59376 21.4424C5.7721 21.6124 6.01014 21.7053 6.25642 21.7011C6.50271 21.6969 6.73745 21.5959 6.90989 21.42C7.08233 21.2441 7.17862 21.0074 7.17794 20.7611C7.17726 20.5148 7.07967 20.2786 6.90626 20.1037C5.80643 19.0286 4.93291 17.7442 4.33717 16.3263C3.74144 14.9083 3.43554 13.3855 3.43751 11.8474C3.43553 10.3268 3.7345 8.82085 4.31717 7.4163C4.89985 6.01174 5.75471 4.73513 6.83251 3.66245ZM24.5963 2.4412C24.5106 2.35125 24.4078 2.27923 24.2941 2.22933C24.1803 2.17943 24.0577 2.15264 23.9335 2.15052C23.8093 2.14841 23.6859 2.171 23.5704 2.21699C23.455 2.26299 23.3499 2.33147 23.2612 2.41844C23.1725 2.50542 23.1019 2.60916 23.0537 2.72365C23.0054 2.83813 22.9804 2.96106 22.98 3.0853C22.9797 3.20954 23.004 3.33261 23.0517 3.44735C23.0993 3.5621 23.1693 3.66623 23.2575 3.7537C25.3794 5.91285 26.5666 8.82017 26.5625 11.8474C26.5645 13.3642 26.267 14.8664 25.6872 16.268C25.1074 17.6695 24.2567 18.9429 23.1838 20.0149C23.0968 20.1021 23.0278 20.2056 22.9808 20.3194C22.9337 20.4332 22.9096 20.5552 22.9097 20.6783C22.9098 20.8015 22.9342 20.9234 22.9814 21.0371C23.0287 21.1509 23.0978 21.2542 23.185 21.3412C23.2722 21.4282 23.3756 21.4972 23.4894 21.5442C23.6033 21.5912 23.7252 21.6154 23.8484 21.6152C23.9715 21.6151 24.0935 21.5908 24.2072 21.5435C24.3209 21.4963 24.4243 21.4271 24.5113 21.3399C25.7579 20.0937 26.7464 18.6138 27.4201 16.9849C28.0939 15.356 28.4396 13.6102 28.4375 11.8474C28.4375 8.18495 26.9713 4.8637 24.5963 2.4412Z" fill="#C49122"/>
      <path d="M10.3425 7.53295C10.4338 7.44926 10.5077 7.3483 10.5597 7.2359C10.6118 7.1235 10.6411 7.0019 10.6459 6.87812C10.6507 6.75434 10.6309 6.63084 10.5877 6.51475C10.5445 6.39866 10.4787 6.29228 10.3941 6.20177C10.3096 6.11125 10.2079 6.0384 10.095 5.98741C9.9821 5.93642 9.86022 5.9083 9.7364 5.90469C9.61258 5.90109 9.48928 5.92205 9.37361 5.96638C9.25794 6.01071 9.1522 6.07752 9.0625 6.16295C7.52625 7.5992 6.5625 9.60045 6.5625 11.8255C6.5625 14.0755 7.55 16.0979 9.115 17.5379C9.29816 17.7064 9.54073 17.7951 9.78933 17.7847C10.0379 17.7743 10.2722 17.6655 10.4406 17.4823C10.609 17.2992 10.6978 17.0566 10.6874 16.808C10.6769 16.5594 10.5682 16.3251 10.385 16.1567C9.1725 15.0442 8.4375 13.5092 8.4375 11.8242C8.4375 10.1592 9.15625 8.64295 10.3425 7.53295ZM21.0037 6.22545C20.8241 6.05356 20.5835 5.96008 20.3349 5.96559C20.0863 5.9711 19.85 6.07514 19.6781 6.25483C19.5062 6.43451 19.4128 6.67512 19.4183 6.92372C19.4238 7.17233 19.5278 7.40856 19.7075 7.58045C20.8637 8.6867 21.5625 10.1842 21.5625 11.8255C21.5625 13.4867 20.8475 15.0004 19.6663 16.1104C19.4898 16.2818 19.3878 16.5156 19.3822 16.7615C19.3766 17.0074 19.4679 17.2456 19.6363 17.4249C19.8047 17.6041 20.0368 17.71 20.2825 17.7197C20.5283 17.7294 20.768 17.6421 20.95 17.4767C22.4788 16.0417 23.4375 14.0442 23.4375 11.8267C23.4375 9.6342 22.5 7.65545 21.0037 6.22545Z" fill="#C49122"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 13.7798C13.1121 13.471 12.7916 13.0339 12.6263 12.5314C12.4609 12.0289 12.4593 11.4869 12.6215 10.9834C12.7837 10.4799 13.1015 10.0408 13.5291 9.72929C13.9566 9.41781 14.472 9.25 15.001 9.25C15.53 9.25 16.0454 9.41781 16.473 9.72929C16.9006 10.0408 17.2184 10.4799 17.3806 10.9834C17.5428 11.4869 17.5411 12.0289 17.3758 12.5314C17.2104 13.0339 16.8899 13.471 16.4604 13.7798L20.8942 27.7161C20.9598 27.9226 20.9519 28.1455 20.8717 28.3468C20.7916 28.5481 20.6442 28.7155 20.4545 28.8204C20.2649 28.9253 20.0448 28.9613 19.8317 28.9222C19.6185 28.8831 19.4255 28.7714 19.2854 28.6061L15.0004 23.5423L10.7167 28.6048C10.5768 28.7707 10.3838 28.8828 10.1705 28.9223C9.95721 28.9617 9.73683 28.926 9.54693 28.8212C9.35703 28.7164 9.20935 28.5489 9.12907 28.3474C9.04879 28.1459 9.04087 27.9228 9.10666 27.7161L13.5417 13.7798ZM16.2292 22.0911L17.6842 23.8098L16.8879 21.3098L16.2292 22.0911ZM16.2192 19.2061L16.1604 19.2686L15.0004 20.6411L13.8404 19.2711L13.7829 19.2073L15.0004 15.3786L16.2192 19.2061ZM13.1129 21.3111L13.7717 22.0911L12.3167 23.8098L13.1129 21.3111Z" fill="#C49122"/>
    </svg>,
      valueColor: "text-[#242E2C]",
    },
  ];

  return (
    <div className="pt-4 sm:pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-lg ${stat.bgColor}`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold ${stat.valueColor}`}
                  >
                    {stat.value.toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 text-[#242E2C]">
                    {stat.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default function ManajemenQRPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);
  const [selectedQRs, setSelectedQRs] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Modal states
  const [selectedQR, setSelectedQR] = useState<{id: string; namaStasiun?: string; qrImageUrl?: string} | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState(false);
  const [isDeleteErrorModalOpen, setIsDeleteErrorModalOpen] = useState(false);
  const [isDownloadSuccessModalOpen, setIsDownloadSuccessModalOpen] = useState(false);
  const [qrsToDelete, setQRsToDelete] = useState<string[]>([]);

  const tabs = ["Semua", "Stasiun 1", "Stasiun 2", "Stasiun 3"];

  // Sample data
  const qrData = [
    { id: "QR-1245", stasiun: "ST-1245", namaStasiun: "DJKA", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1246", stasiun: "ST-1246", namaStasiun: "Bandara SMB II", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1247", stasiun: "ST-1247", namaStasiun: "Jakabaring", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1247", stasiun: "ST-1247", namaStasiun: "Punti Kayu", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1247", stasiun: "ST-1247", namaStasiun: "Asrama Haji", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1248", stasiun: "ST-1248", namaStasiun: "Cinde", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1248", stasiun: "ST-1248", namaStasiun: "Garuda Dempo", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1249", stasiun: "ST-1249", namaStasiun: "RSUD", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1250", stasiun: "ST-1249", namaStasiun: "Bumi Sriwijaya", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1250", stasiun: "ST-1250", namaStasiun: "Dishub", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1250", stasiun: "ST-1250", namaStasiun: "Ampera", qrImageUrl: "/sample-qr.png" },
    { id: "QR-1250", stasiun: "ST-1250", namaStasiun: "Polresta", qrImageUrl: "/sample-qr.png" }
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // Toggle sort direction or reset
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      // New column to sort
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return <ArrowUpDown size={16} />;
    }
    
    if (sortDirection === "asc") {
      return <ArrowUp size={16} />;
    }
    
    if (sortDirection === "desc") {
      return <ArrowDown size={16} />;
    }
    
    return <ArrowUpDown size={16} />;
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedQRs([]);
    } else {
      setSelectedQRs(qrData.map(qr => qr.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectQR = (qrId: string) => {
    if (selectedQRs.includes(qrId)) {
      setSelectedQRs(selectedQRs.filter(id => id !== qrId));
    } else {
      setSelectedQRs([...selectedQRs, qrId]);
    }
  };

  // Handle view QR
  const handleViewQR = (qr: {id: string; namaStasiun?: string; qrImageUrl?: string}) => {
    setSelectedQR(qr);
    setIsQRModalOpen(true);
  };

  // Handle delete QR
  const handleDeleteClick = (qrIds: string[]) => {
    setQRsToDelete(qrIds);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleteModalOpen(false);
    
    try {
      // Simulasi API call untuk hapus QR
      // const response = await fetch('/api/qr/delete', {
      //   method: 'POST',
      //   body: JSON.stringify({ ids: qrsToDelete }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // Demo: Random success or error
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        setIsDeleteSuccessModalOpen(true);
        // Remove deleted QRs from selected QRs
        setSelectedQRs(selectedQRs.filter(id => !qrsToDelete.includes(id)));
      } else {
        setIsDeleteErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Error deleting QR:", error);
      setIsDeleteErrorModalOpen(true);
    }
  };

  const handleRetryDelete = () => {
    setIsDeleteErrorModalOpen(false);
    setTimeout(() => {
      handleConfirmDelete();
    }, 500);
  };

  // Handle download QR
  const handleDownloadQR = (qr: {id: string; qrImageUrl?: string}) => {
    if (!qr.qrImageUrl) return;
    
    // Create a download link
    const link = document.createElement('a');
    link.href = qr.qrImageUrl;
    link.download = `QR-${qr.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download success modal
    setIsDownloadSuccessModalOpen(true);
  };

  const filteredQRs = qrData
    .filter(qr => {
      if (activeTab === "Semua") return true;
      return qr.namaStasiun === activeTab;
    })
    .filter(qr => {
      if (!searchQuery) return true;
      return (
        qr.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qr.stasiun.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qr.namaStasiun.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  // Sort the filtered QRs
  const sortedQRs = [...filteredQRs];
  if (sortColumn && sortDirection) {
    sortedQRs.sort((a, b) => {
      const valueA = a[sortColumn as keyof typeof a];
      const valueB = b[sortColumn as keyof typeof b];
      
      if (sortDirection === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-medium text-[#CF0000]">
        Manajemen QR
      </h1>

      {/* Stats */}
      <QRStats />
      
      {/* Actions Button */}
      <div className="flex items-center w-full sm:w-auto">
        <Link
          href="/qr-management/create"
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#CF0000] text-white rounded-lg hover:bg-red-700 text-xs sm:text-sm w-full sm:w-auto transition-colors"
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Tambah QR
        </Link>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-8 px-3 sm:px-4 flex-shrink-0 flex items-center justify-center text-xs font-medium tracking-wider rounded-lg transition-colors
                ${
                  activeTab === tab
                    ? "bg-[#CF0000] text-[#FBFBFC]"
                    : "bg-gray-100 text-[#080808] hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search and Tools */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Search Input */}
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari QR atau Stasiun..."
              className="w-full sm:w-[283px] h-8 pl-10 pr-4 rounded-[20px] bg-[#E5E6E6] text-xs"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs hover:bg-gray-50 transition-colors"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
            <button className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs hover:bg-gray-50 transition-colors">
              <FileDown size={18} />
              Export
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs w-full justify-center hover:bg-gray-50 transition-colors"
            >
              <Menu size={18} />
              Menu
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-xs hover:bg-gray-50 w-full"
                >
                  <RefreshCw size={18} />
                  Refresh
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 text-xs hover:bg-gray-50 w-full">
                  <FileDown size={18} />
                  Export
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bulk Delete Button - Visible when items are selected */}
      {selectedQRs.length > 0 && (
        <div className="flex justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
            onClick={() => handleDeleteClick(selectedQRs)}
          >
            <Trash className="w-4 h-4" />
            Hapus {selectedQRs.length} QR yang dipilih
          </button>
        </div>
      )}

      {/* QR Table */}
      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-4 p-4 text-left">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300" 
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th 
                  className="p-4 text-left text-sm font-medium cursor-pointer"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center gap-1">
                    QR Id {getSortIcon('id')}
                  </div>
                </th>
                <th 
                  className="p-4 text-left text-sm font-medium cursor-pointer"
                  onClick={() => handleSort('stasiun')}
                >
                  <div className="flex items-center gap-1">
                    Stasiun Id {getSortIcon('stasiun')}
                  </div>
                </th>
                <th 
                  className="p-4 text-left text-sm font-medium cursor-pointer"
                  onClick={() => handleSort('namaStasiun')}
                >
                  <div className="flex items-center gap-1">
                    Nama Stasiun {getSortIcon('namaStasiun')}
                  </div>
                </th>
                <th className="p-4 text-left text-sm font-medium">
                  Tampilkan QR
                </th>
                <th className="p-4 text-right text-sm font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {sortedQRs.map((qr, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300"
                      checked={selectedQRs.includes(qr.id)}
                      onChange={() => handleSelectQR(qr.id)}
                    />
                  </td>
                  <td className="p-4 text-sm font-medium">{qr.id}</td>
                  <td className="p-4 text-sm">{qr.stasiun}</td>
                  <td className="p-4 text-sm">{qr.namaStasiun}</td>
                  <td className="p-4">
                    <button 
                      onClick={() => handleViewQR(qr)}
                      className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs text-gray-700"
                    >
                      Lihat QR
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleDownloadQR(qr)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Download QR"
                      >
                        <Download className="w-4 h-4 text-gray-500" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick([qr.id])}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Hapus QR"
                      >
                        <Trash className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">Showing</span>
          <select className="bg-gray-100 px-2 py-1.5 rounded">
            <option>1</option>
          </select>
          <span className="text-gray-500">out of 2</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-gray-100 rounded-lg">
            <ChevronLeft size={16} className="text-gray-700" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#CF0000] text-white">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700">
            2
          </button>

          <button className="p-1.5 bg-gray-100 rounded-lg">
            <ChevronRight size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Modals */}
      {selectedQR && (
        <LihatQRModal
          isOpen={isQRModalOpen}
          onClose={() => setIsQRModalOpen(false)}
          qrData={selectedQR}
        />
      )}

      <DeleteQRModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        count={qrsToDelete.length}
      />

      <DeleteSuccessModal
        isOpen={isDeleteSuccessModalOpen}
        onClose={() => setIsDeleteSuccessModalOpen(false)}
        count={qrsToDelete.length}
      />

      <DeleteErrorModal
        isOpen={isDeleteErrorModalOpen}
        onClose={() => setIsDeleteErrorModalOpen(false)}
        onRetry={handleRetryDelete}
        count={qrsToDelete.length}
      />

      <DownloadSuccessModal
        isOpen={isDownloadSuccessModalOpen}
        onClose={() => setIsDownloadSuccessModalOpen(false)}
      />
    </div>
  );
}