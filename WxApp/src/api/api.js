import {
  wxRequest
} from '../utils/wxRequest'
let apiBase = 'http://10.113.10.198:8000';
const rank = ()=>wxRequest({
  method:'GET',
  query:{
  },
},apiBase+'/richest?page=1');
const account = (address)=>wxRequest({
  method: 'GET',
  query:{
    address:address,
  },
},apiBase+'/account');
const dis = ()=>wxRequest({
  method:'GET',
  query:{
  },
},apiBase+'/distribution');
module.exports = {
  rank,
  account,
  dis,
};
