const express = require('express');

const {
  newGroup,
  getGroup,
  getAllGroups,
  updateGroup,
  addMember,
  deleteMember,
} = require('../controllers/groupControllers');
const isLoggedIn = require('../middlewares/isLoggedIn');

const router = express.Router();

router.post('/new', isLoggedIn, newGroup);
router.get('/:id', isLoggedIn, getGroup);
router.get('/', isLoggedIn, getAllGroups);
router.patch('/:id', isLoggedIn, updateGroup);

//For Member
router.post('/:groupId/member', isLoggedIn, addMember);
router.delete('/:groupId/member/:memberId', isLoggedIn, deleteMember);

module.exports = router;
