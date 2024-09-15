import React from "react";

const Sidebar = () => {
  return (
    <div class="xl:w-96 w-80 xl:p-4 p-2 bg-black flex-col justify-start items-start gap-5 inline-flex border-r">
      <div class="w-full pt-4 justify-between items-center gap-2.5 inline-flex">
        <a href="javascript:;">
          <img
            src="https://pagedone.io/asset/uploads/1701235273.png"
            alt="Pagedone logo image"
          />
        </a>
        <a href="javascript:;" class="w-6 h-6 relative bg-black">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_113_1429)">
              <path
                d="M20.75 20.25H4.25"
                stroke="#121331"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M20.75 3.75H4.25"
                stroke="#121331"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M4.25 8.25C4.25 7.69772 4.69772 7.25 5.25 7.25H19.75C20.3023 7.25 20.75 7.69772 20.75 8.25V15.75C20.75 16.3023 20.3023 16.75 19.75 16.75H5.25C4.69772 16.75 4.25 16.3023 4.25 15.75V8.25Z"
                stroke="#121331"
                stroke-width="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_113_1429">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div class="w-full p-3 rounded-lg border border-gray-300">
        <div class="w-full items-center flex">
          <div class="w-full justify-between items-center inline-flex">
            <div class="items-center flex">
              {/* <img
                class="rounded-lg"
                alt="Ronald image"
                src="https://pagedone.io/asset/uploads/1701235464.png"
              /> */}
              <div class="flex-col inline-flex ml-2.5">
                <h2 class="text-gray-700 text-sm font-semibold leading-snug">
                  Ronald Richards
                </h2>
                <h6 class="text-black/20 text-xs font-normal leading-4">
                  ronaldrich@pagedone.com
                </h6>
              </div>
            </div>
            <div class="flex items-center">
              <a href="javascript:;" class="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="More Vertical">
                    <path
                      id="icon"
                      d="M10.0156 14.9896V15.0396M10.0156 9.97595V10.026M10.0156 4.96228V5.01228"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full h-8 px-3 items-center flex">
          <h6 class="text-gray-500 text-xs font-semibold leading-4 ">MENU</h6>
        </div>
        <ul class="flex-col gap-1 flex">
          <li>
            <a href="javascript:;">
              <div class="flex-col flex p-3 bg-black rounded-lg">
                <div class="h-5 gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="category 02">
                        <g id="icon">
                          <path
                            d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667C8.33333 7.0275 7.0275 8.33333 5.41667 8.33333C3.80584 8.33333 2.5 7.0275 2.5 5.41667Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                          <path
                            d="M11.6667 5.41667C11.6667 4.24628 11.6667 3.66109 11.9476 3.24072C12.0691 3.05873 12.2254 2.90248 12.4074 2.78088C12.8278 2.5 13.4129 2.5 14.5833 2.5C15.7537 2.5 16.3389 2.5 16.7593 2.78088C16.9413 2.90248 17.0975 3.05873 17.2191 3.24072C17.5 3.66109 17.5 4.24628 17.5 5.41667C17.5 6.58705 17.5 7.17224 17.2191 7.59262C17.0975 7.7746 16.9413 7.93085 16.7593 8.05245C16.3389 8.33333 15.7537 8.33333 14.5833 8.33333C13.4129 8.33333 12.8278 8.33333 12.4074 8.05245C12.2254 7.93085 12.0691 7.7746 11.9476 7.59262C11.6667 7.17224 11.6667 6.58705 11.6667 5.41667Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                          <path
                            d="M11.6667 14.5833C11.6667 12.9725 12.9725 11.6667 14.5833 11.6667C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                          <path
                            d="M2.5 14.5833C2.5 13.4129 2.5 12.8278 2.78088 12.4074C2.90248 12.2254 3.05873 12.0691 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0691 7.93085 12.2254 8.05245 12.4074C8.33333 12.8278 8.33333 13.4129 8.33333 14.5833C8.33333 15.7537 8.33333 16.3389 8.05245 16.7593C7.93085 16.9413 7.7746 17.0975 7.59262 17.2191C7.17224 17.5 6.58705 17.5 5.41667 17.5C4.24628 17.5 3.66109 17.5 3.24072 17.2191C3.05873 17.0975 2.90248 16.9413 2.78088 16.7593C2.5 16.3389 2.5 15.7537 2.5 14.5833Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    Home
                  </h2>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="flex-col gap-1 flex">
                <div class="flex-col flex p-3 bg-black rounded-lg">
                  <div class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Swap">
                          <path
                            id="icon"
                            d="M2.50325 9.00193C2.50145 5.42312 5.40119 2.52045 8.98001 2.51865M8.99678 2.5L7.25783 4.94982M17.5 10.9172C17.5 14.496 14.5988 17.3972 11.02 17.3972M11.0022 17.4161L12.7423 14.9671M14.5833 8.3334C12.9725 8.3334 11.6667 7.02756 11.6667 5.41673C11.6667 3.8059 12.9725 2.50006 14.5833 2.50006C16.1942 2.50006 17.5 3.8059 17.5 5.41673C17.5 7.02756 16.1942 8.3334 14.5833 8.3334ZM5.41667 17.5001C4.24628 17.5001 3.66109 17.5001 3.24072 17.2192C3.05873 17.0976 2.90248 16.9413 2.78088 16.7593C2.5 16.339 2.5 15.7538 2.5 14.5834C2.5 13.413 2.5 12.8278 2.78088 12.4074C2.90248 12.2255 3.05873 12.0692 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0692 7.93085 12.2255 8.05245 12.4074C8.33333 12.8278 8.33333 13.413 8.33333 14.5834C8.33333 15.7538 8.33333 16.339 8.05245 16.7593C7.93085 16.9413 7.7746 17.0976 7.59262 17.2192C7.17224 17.5001 6.58705 17.5001 5.41667 17.5001Z"
                            stroke="#6B7280"
                            stroke-width="1.60274"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Vote
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <div class="flex-col flex">
              <div class="flex-col flex p-3 bg-black rounded-lg">
                <div class="justify-between inline-flex">
                  <a href="javascript:;" class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Upload 02">
                          <path
                            id="icon"
                            d="M8.1475 12.6968L9.99935 10.8333L11.8512 12.6968M9.99935 17.5V10.8795M5.36972 13.6805H4.92701C3.12601 13.6805 1.66602 12.2205 1.66602 10.4196C1.66602 8.61855 3.12601 7.15855 4.92701 7.15855V7.15855C5.17151 7.15855 5.36753 6.95973 5.39031 6.71629C5.61168 4.35087 7.59071 2.5 9.99935 2.5C12.5562 2.5 14.629 4.5857 14.629 7.15855H15.0717C16.8727 7.15855 18.3327 8.61855 18.3327 10.4196C18.3327 12.2205 16.8727 13.6805 15.0717 13.6805H14.629"
                            stroke="#6B7280"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Upload
                    </h2>
                  </a>
                  <a href="javascript:;" class="flex items-center gap-3">
                    <div class="px-2.5 py-0.5 bg-indigo-100 rounded-3xl">
                      <h6 class="text-indigo-600 text-xs font-medium leading-4">
                        12
                      </h6>
                    </div>
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g id="Right arrow 4">
                          <path
                            id="icon"
                            d="M6.00236 3.99719L10.0025 7.99736L6 11.9999"
                            stroke="#6B7280"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <div class="flex-col gap-1 flex">
                <div class="flex-col flex bg-black rounded-lg p-3">
                  <div class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Cube 01">
                          <path
                            id="icon"
                            d="M2.78223 5.83329C2.52965 6.27072 2.52543 6.80097 2.517 7.86146L2.5 9.99996L2.517 12.1385C2.52543 13.199 2.52965 13.7292 2.78223 14.1666C3.03481 14.6041 3.49196 14.8728 4.40627 15.4104L6.25 16.4943L8.11073 17.5489C9.03347 18.0718 9.49484 18.3333 10 18.3333M2.78223 5.83329C3.03481 5.39587 3.49196 5.12709 4.40627 4.58955L6.25 3.50557L8.11073 2.45104C9.03347 1.9281 9.49484 1.66663 10 1.66663C10.5052 1.66663 10.9665 1.9281 11.8893 2.45104L13.75 3.50557L15.5937 4.58955C16.508 5.12709 16.9652 5.39587 17.2178 5.83329M2.78223 5.83329L10 9.99996M10 18.3333C10.5052 18.3333 10.9665 18.0718 11.8893 17.5489L13.75 16.4943L15.5937 15.4104C16.508 14.8728 16.9652 14.6041 17.2178 14.1666C17.4704 13.7292 17.4746 13.199 17.483 12.1385L17.5 9.99996L17.483 7.86146C17.4746 6.80097 17.4704 6.27072 17.2178 5.83329M10 18.3333V9.99996M17.2178 5.83329L10 9.99996"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Packs
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="flex-col gap-1 flex">
                <div class="flex-col flex bg-black rounded-lg p-3">
                  <div class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Shop">
                          <path
                            id="icon"
                            d="M15.8338 7.5V14.1667C15.8338 15.738 15.8338 16.5237 15.3456 17.0118C14.8575 17.5 14.0718 17.5 12.5005 17.5H7.50045C5.9291 17.5 5.14343 17.5 4.65527 17.0118C4.16712 16.5237 4.16712 15.738 4.16712 14.1667V7.5M7.50045 2.5H6.03139C5.45185 2.5 5.16208 2.5 4.91255 2.58051C4.55586 2.69558 4.24838 2.92752 4.03974 3.23887C3.89378 3.45668 3.81417 3.73531 3.65496 4.29255L3.46215 4.9674C3.30254 5.52601 3.22274 5.80531 3.21582 6.00994C3.18427 6.942 3.92364 7.71858 4.85614 7.73279C5.06086 7.7359 5.34374 7.6699 5.9095 7.53789C6.19705 7.47079 6.34083 7.43724 6.46286 7.38751C7.00256 7.16753 7.38815 6.68161 7.47974 6.10604C7.50045 5.9759 7.50045 5.82826 7.50045 5.53299V2.5ZM7.50045 2.5H12.5005M7.50045 2.5V5C7.50045 5.77657 7.50045 6.16485 7.62732 6.47114C7.79647 6.87952 8.12093 7.20398 8.52931 7.37313C8.8356 7.5 9.22388 7.5 10.0005 7.5C10.777 7.5 11.1653 7.5 11.4716 7.37313C11.88 7.20398 12.2044 6.87952 12.3736 6.47114C12.5005 6.16485 12.5005 5.77657 12.5005 5V2.5M12.5005 2.5H13.9695C14.549 2.5 14.8388 2.5 15.0884 2.58051C15.445 2.69558 15.7525 2.92752 15.9612 3.23887C16.1071 3.45668 16.1867 3.73531 16.3459 4.29255L16.5388 4.9674C16.6984 5.52601 16.7782 5.80531 16.7851 6.00994C16.8166 6.942 16.0773 7.71858 15.1448 7.73279C14.94 7.7359 14.6572 7.6699 14.0914 7.53789C13.8038 7.47079 13.6601 7.43724 13.538 7.38751C12.9983 7.16753 12.6127 6.68161 12.5212 6.10604C12.5005 5.9759 12.5005 5.82826 12.5005 5.53299V2.5ZM11.6671 17.5V14.1667C11.6671 13.381 11.6671 12.9882 11.423 12.7441C11.179 12.5 10.7861 12.5 10.0005 12.5C9.21478 12.5 8.82194 12.5 8.57786 12.7441C8.33378 12.9882 8.33378 13.381 8.33378 14.1667V17.5H11.6671Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Store
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="flex-col gap-1 flex">
                <div class="flex-col flex bg-black rounded-lg p-3">
                  <div class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Screenshot">
                          <path
                            id="icon"
                            d="M6.66667 2.5H5.83333C4.26198 2.5 3.47631 2.5 2.98816 2.98816C2.5 3.47631 2.5 4.26198 2.5 5.83333V6.66667M13.3333 2.5H14.1667C15.738 2.5 16.5237 2.5 17.0118 2.98816C17.5 3.47631 17.5 4.26198 17.5 5.83333V6.66667M2.5 13.3333V14.1667C2.5 15.738 2.5 16.5237 2.98816 17.0118C3.47631 17.5 4.26198 17.5 5.83333 17.5H6.66667M17.5 13.3333V14.1667C17.5 15.738 17.5 16.5237 17.0118 17.0118C16.5237 17.5 15.738 17.5 14.1667 17.5H13.3333M11.3886 10.5556C11.3886 11.3226 10.7668 11.9444 9.99973 11.9444C9.23267 11.9444 8.61084 11.3226 8.61084 10.5556C8.61084 9.78849 9.23267 9.16667 9.99973 9.16667C10.7668 9.16667 11.3886 9.78849 11.3886 10.5556ZM14.1667 8.59776V10.8333C14.1667 12.4047 14.1667 13.1904 13.6785 13.6785C13.1904 14.1667 12.4047 14.1667 10.8333 14.1667H9.16667C7.59532 14.1667 6.80964 14.1667 6.32149 13.6785C5.83333 13.1904 5.83333 12.4047 5.83333 10.8333V8.59776C5.83333 7.80461 6.43421 7.14045 7.22339 7.06129L7.57187 7.02633C7.92642 6.99077 8.2323 6.76218 8.36686 6.43223C8.51456 6.07007 8.86678 5.83333 9.2579 5.83333H10.7421C11.1332 5.83333 11.4854 6.07007 11.6331 6.43223C11.7677 6.76218 12.0736 6.99077 12.4281 7.02633L12.7766 7.06129C13.5658 7.14045 14.1667 7.80461 14.1667 8.59776Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Livestream
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="flex-col gap-1 flex">
                <div class="flex-col flex bg-black rounded-lg p-3">
                  <div class="h-5 gap-3 flex">
                    <div class="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g id="Delivery">
                          <path
                            id="icon"
                            d="M17.5 13.3334H9.16667C6.80964 13.3334 5.63113 13.3334 4.8989 12.6011C4.16667 11.8689 4.16667 10.6904 4.16667 8.33337V5.00004C4.16667 4.07957 3.42047 3.33337 2.5 3.33337M8.33333 17.0834C8.33333 17.7737 7.77369 18.3334 7.08333 18.3334C6.39298 18.3334 5.83333 17.7737 5.83333 17.0834C5.83333 16.393 6.39298 15.8334 7.08333 15.8334C7.77369 15.8334 8.33333 16.393 8.33333 17.0834ZM15 17.0834C15 17.7737 14.4404 18.3334 13.75 18.3334C13.0596 18.3334 12.5 17.7737 12.5 17.0834C12.5 16.393 13.0596 15.8334 13.75 15.8334C14.4404 15.8334 15 16.393 15 17.0834ZM10.4167 10H13.75C14.9204 10 15.5056 10 15.926 9.71916C16.1079 9.59756 16.2642 9.44131 16.3858 9.25932C16.6667 8.83895 16.6667 8.25376 16.6667 7.08337C16.6667 5.91299 16.6667 5.3278 16.3858 4.90742C16.2642 4.72544 16.1079 4.56919 15.926 4.44759C15.5056 4.16671 14.9204 4.16671 13.75 4.16671H10.4167C9.24628 4.16671 8.66109 4.16671 8.24072 4.44759C8.05873 4.56919 7.90248 4.72544 7.78088 4.90742C7.5 5.3278 7.5 5.91299 7.5 7.08337C7.5 8.25376 7.5 8.83895 7.78088 9.25932C7.90248 9.44131 8.05873 9.59756 8.24072 9.71916C8.66109 10 9.24628 10 10.4167 10Z"
                            stroke="#6B7280"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <h2 class="text-gray-500 text-sm font-medium leading-snug">
                      Tickets
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="p-6 bg-indigo-50 rounded-2xl flex-col gap-4 flex">
        <div class="flex-col gap-3 flex">
          <div class="items-center gap-2 inline-flex">
            <img
              src="	https://pagedone.io/asset/uploads/1701235770.png"
              alt="Upgrade image"
            />
            <h2 class="text-gray-900 text-base font-bold leading-relaxed">
              Upgrade To PRO🔥
            </h2>
          </div>
          <h3 class="text-gray-500 text-xs font-normal leading-4">
            Get 1 month free and unlock all pro features.
          </h3>
        </div>
        <div class="gap-3 inline-flex">
          <a
            href="javascript:;"
            class="flex rounded-full text-indigo-300 text-xs font-semibold leading-4"
          >
            {" "}
            Dismiss{" "}
          </a>
          <a
            href="javascript:;"
            class="flex rounded-full text-indigo-700 text-xs font-semibold leading-4"
          >
            {" "}
            Upgrade Plan{" "}
          </a>
        </div>
      </div>
      <div class="w-full flex-col flex">
        <div class="h-8 px-3 items-center inline-flex">
          <h6 class="text-gray-500 text-xs font-semibold leading-4">
            SETTINGS
          </h6>
        </div>
        <ul class="flex-col gap-1 flex">
          <li>
            <a href="javascript:;">
              <div class="p-3 rounded-lg items-center inline-flex">
                <div class="h-5 items-center gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="User Circle">
                        <path
                          id="icon"
                          d="M5.5 16C5.5 13.9289 7.51472 12.25 10 12.25C12.4853 12.25 14.5 13.9289 14.5 16M12.25 7.75C12.25 8.99264 11.2426 10 10 10C8.75736 10 7.75 8.99264 7.75 7.75C7.75 6.50736 8.75736 5.5 10 5.5C11.2426 5.5 12.25 6.50736 12.25 7.75ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                          stroke="#6B7280"
                          stroke-width="1.6"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    Profile
                  </h2>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="p-3 rounded-lg items-center inline-flex">
                <div class="h-5 items-center gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <g id="Group 214">
                        <path
                          id="icon"
                          d="M1.98739 14.8333L4.89324 11.7046C5.41043 11.0724 5.66903 10.7564 6.00782 10.7194C6.06155 10.7135 6.11572 10.7129 6.16957 10.7176C6.50912 10.7467 6.77489 11.0568 7.30642 11.6769C7.85881 12.3214 8.13501 12.6436 8.48418 12.6671C8.53942 12.6708 8.59488 12.669 8.64976 12.6617C8.99667 12.6156 9.25131 12.276 9.76059 11.597L10.9672 9.98818C11.5917 9.15555 11.9039 8.73923 12.3266 8.74415C12.7493 8.74906 13.0518 9.17253 13.6568 10.0195L16.5 14M16.5 14V8.16667C16.5 5.02397 16.5 3.45262 15.5237 2.47631C14.5474 1.5 12.976 1.5 9.83333 1.5H8.16667C5.02397 1.5 3.45262 1.5 2.47631 2.47631C1.5 3.45262 1.5 5.02397 1.5 8.16667V9.83333C1.5 12.976 1.5 14.5474 2.47631 15.5237C3.45262 16.5 5.02397 16.5 8.16667 16.5H14C15.3807 16.5 16.5 15.3807 16.5 14ZM9 6.5C9 7.42047 8.25381 8.16667 7.33333 8.16667C6.41286 8.16667 5.66667 7.42047 5.66667 6.5C5.66667 5.57953 6.41286 4.83333 7.33333 4.83333C8.25381 4.83333 9 5.57953 9 6.5Z"
                          stroke="#6B7280"
                          stroke-width="1.6"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    Blog
                  </h2>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="p-3 rounded-lg items-center inline-flex">
                <div class="h-5 items-center gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="Media Video list">
                        <path
                          id="icon"
                          d="M5.83333 15C3.99238 15 2.5 13.5076 2.5 11.6667V8.75C2.5 6.01043 2.5 4.64065 3.25663 3.71869C3.39515 3.54991 3.54991 3.39515 3.71869 3.25663C4.64065 2.5 6.01043 2.5 8.75 2.5H11.6667C13.5076 2.5 15 3.99238 15 5.83333M11.6667 17.5C9.3259 17.5 8.15551 17.5 7.31477 16.9382C6.9508 16.695 6.6383 16.3825 6.3951 16.0186C5.83333 15.1778 5.83333 14.0074 5.83333 11.6667C5.83333 9.3259 5.83333 8.15551 6.3951 7.31477C6.6383 6.9508 6.9508 6.6383 7.31477 6.3951C8.15551 5.83333 9.3259 5.83333 11.6667 5.83333C14.0074 5.83333 15.1778 5.83333 16.0186 6.3951C16.3825 6.6383 16.695 6.9508 16.9382 7.31477C17.5 8.15551 17.5 9.3259 17.5 11.6667C17.5 14.0074 17.5 15.1778 16.9382 16.0186C16.695 16.3825 16.3825 16.695 16.0186 16.9382C15.1778 17.5 14.0074 17.5 11.6667 17.5ZM10.1389 11.6666C10.1389 10.4583 10.1389 9.85413 10.5143 9.60722C10.5413 9.58945 10.5693 9.57327 10.5982 9.55876C10.9998 9.35711 11.523 9.65919 12.5694 10.2634C13.6159 10.8675 14.1391 11.1696 14.1653 11.6182C14.1671 11.6505 14.1671 11.6828 14.1653 11.7151C14.1391 12.1637 13.6159 12.4658 12.5694 13.0699C11.523 13.6741 10.9998 13.9762 10.5982 13.7745C10.5693 13.76 10.5413 13.7438 10.5143 13.7261C10.1389 13.4792 10.1389 12.875 10.1389 11.6666Z"
                          stroke="#6B7280"
                          stroke-width="1.6"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    News
                  </h2>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="p-3 rounded-lg items-center inline-flex">
                <div class="h-5 items-center gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="Help circle">
                        <path
                          id="icon"
                          d="M6.89302 7.67903C6.89302 8.12086 7.2512 8.47903 7.69302 8.47903C8.13485 8.47903 8.49302 8.12086 8.49302 7.67903H6.89302ZM9.41044 11.9928C9.41044 12.4346 9.76861 12.7928 10.2104 12.7928C10.6523 12.7928 11.0104 12.4346 11.0104 11.9928H9.41044ZM9.97915 13.7854C9.53732 13.7854 9.17915 14.1436 9.17915 14.5854C9.17915 15.0273 9.53732 15.3854 9.97915 15.3854V13.7854ZM10.0208 15.3854C10.4626 15.3854 10.8208 15.0273 10.8208 14.5854C10.8208 14.1436 10.4626 13.7854 10.0208 13.7854V15.3854ZM16.7 10C16.7 13.7003 13.7003 16.7 10 16.7V18.3C14.584 18.3 18.3 14.584 18.3 10H16.7ZM10 16.7C6.29969 16.7 3.3 13.7003 3.3 10H1.7C1.7 14.584 5.41604 18.3 10 18.3V16.7ZM3.3 10C3.3 6.29969 6.29969 3.3 10 3.3V1.7C5.41604 1.7 1.7 5.41604 1.7 10H3.3ZM10 3.3C13.7003 3.3 16.7 6.29969 16.7 10H18.3C18.3 5.41604 14.584 1.7 10 1.7V3.3ZM8.49302 7.67903C8.49302 7.14654 8.68796 6.80331 8.93991 6.58348C9.20767 6.34985 9.58974 6.21456 10 6.21456C10.4103 6.21456 10.7923 6.34985 11.0601 6.58348C11.312 6.80331 11.507 7.14654 11.507 7.67903H13.107C13.107 6.70187 12.7252 5.91287 12.112 5.37787C11.5146 4.85667 10.7432 4.61456 10 4.61456C9.25677 4.61456 8.48535 4.85667 7.888 5.37787C7.27483 5.91287 6.89302 6.70187 6.89302 7.67903H8.49302ZM11.507 7.67903C11.507 8.07278 11.4159 8.2976 11.308 8.46417C11.1782 8.66443 11.0054 8.81873 10.7151 9.08755C10.4468 9.33601 10.1005 9.6662 9.83713 10.1449C9.56679 10.6362 9.41044 11.2306 9.41044 11.9928H11.0104C11.0104 11.4613 11.1162 11.1393 11.2389 10.9162C11.3686 10.6805 11.5464 10.4984 11.8023 10.2614C12.0362 10.0449 12.3874 9.74064 12.6508 9.33412C12.936 8.89392 13.107 8.36372 13.107 7.67903H11.507ZM9.97915 15.3854H10.0208V13.7854H9.97915V15.3854Z"
                          fill="#6B7280"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    Settings
                  </h2>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div class="p-3 rounded-lg items-center inline-flex">
                <div class="h-5 items-center gap-3 flex">
                  <div class="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="Logout">
                        <path
                          id="icon"
                          d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V14.1667L2.5 5.83333V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333"
                          stroke="#6B7280"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 class="text-gray-500 text-sm font-medium leading-snug">
                    Logout
                  </h2>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
