import styled from "styled-components";

export const Main = styled.main`
   position: fixed;
   top: 30px;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: center;
   z-index: 2;

   .container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .basket {
      position: relative;
      
      svg {
         position: relative;
         font-size: 50px;
         transition: all .2s ease-in-out;
         z-index: 1;
      }
      span {
         position: absolute;
         top: -5px;
         left: -10px;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #3E82F8;
         color: #fff;
         border-radius: 5px;
         padding: 0 7.5px;
         min-width: 20px;
         height: 25px;

         & + svg:hover {
            opacity: 0.9;
         }
      }
   }
   .items {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: calc(100% + 15px);
      border: 1px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      width: 300px;
      max-height: 300px;

      ul {
         line-height: 1.5;
         height: 100%;
         overflow: auto;
         
         li {
            position: relative;
            padding: 10px 15px;

            &:not(:last-of-type) {
               border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            }
            h5 span {
               opacity: 0.65;
            }
            p {
               font-size: 14px;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
            }
            .remove {
               display: block;
               position: absolute;
               top: 5px;
               right: 5px;
               padding: 5px 10px;
               color: #c7463d;
               transition: all .2s ease-in-out;
               cursor: pointer;
               
               &:hover {
                  opacity: 0.7;
               }
            }
         }
      }
      button {
         min-height: 40px;
         background-color: #3E82F8;
         color: #fff;
         transition: all .2s ease-in-out;
         cursor: pointer;
         font-size: 15px;
         font-weight: 500;
         border: 1px solid transparent;

         &:hover {
            box-shadow: 0 0 10px #3E82F8;
         }
      }
   }
   @media (max-width: 1100px) {
      position: relative;
      top: 0;
      margin: 15px 0 40px;
   }
   @media (max-width: 400px) {
      .items {
         width: 100%;
      }
   }
`;