import styled from "styled-components";

export const Main = styled.main`
   width: 1045px;
   height: 255px;

   .filter .sort .title, .filter .search input, .filter .range input {
      height: 35px;
      border-radius: 5px;
      background-color: #fff;
      color: #617988;
   }
   .filter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      .search {
         position: relative;
         display: flex;
         align-items: center;
         width: 300px;

         input {
            width: 100%;
            font-size: 18px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding: 0 40px 0 7.5px;
         
            &::placeholder {
               color: #000;
               opacity: 0.5;
            }
         }
         svg {
            position: absolute;
            right: 15px;
            opacity: 0.5;
         }
      }
      .flex {
         display: flex;
      }
      .sort {
         position: relative;
         width: 210px;
         cursor: pointer;

         .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0 7.5px;
            width: 100%;
            transition: all .2s ease-in-out;

            &:hover {
               opacity: 0.8;
            }
         }
         ul {
            position: absolute;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
            background-color: #fff;
            border-radius: 5px;
            margin-top: 5px;
            z-index: 1;

            li {
               padding: 5px 7.5px;
               transition: all .1s ease-in-out;

               &:not(:last-of-type) {
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
               }
               &:hover {
                  background-color: #2e3d48;
                  color: #fff;
               }
            }
         }
      }
      .range {
         display: flex;
         align-items: center;
         margin-left: 15px;

         > div {
            position: relative;
            display: flex;
            align-items: center;

            input {
               width: 90px;
               border: 1px solid rgba(0, 0, 0, 0.1);
               padding: 0 7.5px 0 25px;
               font-size: 18px;
            }
            svg {
               position: absolute;
               left: 7.5px;
               opacity: 0.5;
            }
         }
         > span {
            margin: 0 5px;
         }
      }
   }
   > .items {
      display: flex;

      li {
         position: relative;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         width: calc(100% / 4);
         height: 200px;
         line-height: 1.5;
         background-color: #fff;
         border-radius: 5px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
         padding: 15px 15px;
         overflow: hidden;

         &:not(:last-of-type) {
            margin-right: 15px;
         }
         h4 {
            margin-bottom: 5px;
         }
         p {
            opacity: 0.8;
         }
         span {
            color: #339966;
         }
         .add {
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(62, 130, 248, 0.4);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all .2s ease-in-out;

            button {
               min-height: 35px;
               background-color: #3E82F8;
               color: #fff;
               transition: all .2s ease-in-out;
               cursor: pointer;
               font-size: 15px;
               font-weight: 500;
               border: 1px solid transparent;
               padding: 0 15px;
               border-radius: 5px;
               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

               &:hover {
                  background-color: #2270f7;
               }
            }
         }
         &:hover .add {
            opacity: 1;
         }
      }
   }
   @media (max-width: 1100px) {
      width: 100%;
      height: auto;
      padding: 15px;

      > .items {
         flex-wrap: wrap;

         li {
            width: calc((100% / 3) - 10px);
            margin-bottom: 15px;

            &:nth-of-type(3n) {
               margin-right: 0;
            }
         }
      }
   }
   @media (max-width: 800px) {
      .filter {
         flex-direction: column;
         margin-bottom: 15px;

         .search {
            margin-bottom: 7.5px;
         }
      }
      > .items li {
         width: calc((100% / 2) - 6.666px);
         margin-bottom: 10px;
         
         &:not(:last-of-type) {
            margin-right: 10px;
         }
         &:nth-of-type(2n) {
            margin-right: 0;
         }
      }
   }
   @media (max-width: 475px) {
      .filter {
         .search, .flex, .sort {
            width: 100%;
         }
         .flex {
            display: block;
         }
         .range {
            margin-left: 0;
            margin-top: 7.5px;

            > div input {
               width: 100%;
            }
         }
      }
      > .items li {
         width: 100%;
         
         &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 10px;
         }
      }
   }
`;