// const all = {
//     port: 9000,
//     ip: process.env.ip || '0.0.0.0',
//     secrets: {
//         session: 'h5maker'
//     },
//     mongo: {
//         uri: 'mongodb://192.168.32.45:27017/h5maker',
//         user: 'h5maker',
//         pass: 'xgd$MPB37@8GALX#'
//     },
//     userRoles: ['guest', 'user', 'admin']
// }
// module.exports = all;

const all = {
  port: 9000,
  ip: process.env.ip || '0.0.0.0',
  secrets: {
    session: 'h5maker'
  },
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/h5maker'
  },
  userRoles: ['guest', 'user', 'admin']
}
module.exports = all;
