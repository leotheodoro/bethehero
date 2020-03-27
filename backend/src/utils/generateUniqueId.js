export default function generateUniqueId() {
  crypto.randomBytes(4).toString('HEX');
}