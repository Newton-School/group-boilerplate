const User = require('../models/userModel');
const Group = require('../models/groupModel');

//Kindly Check Description before writing code
const newGroup = async (req, res) => {
  const { name } = req.body;

  try {
    // Create a new group & Add the group to the user's group list
  } catch (error) {
    console.error('Error creating group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getGroup = async (req, res) => {
  const groupId = req.params.id;

  try {
    //Write a code here to get a Group by ID
  } catch (error) {
    console.error('Error fetching group details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllGroups = async (req, res) => {
  try {
    //Write a code to Fetch all groups
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateGroup = async (req, res) => {
  const groupId = req.params.id;
  const { name } = req.body;

  try {
    //Write a code here to update a group by its ID
  } catch (error) {
    console.error('Error updating group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addMember = async (req, res) => {
  const groupId = req.params.groupId;
  const { memberId } = req.body;

  try {
    //Write a code to add a Member into a group
    //1) Check if the group exists
    //2) Check if the member exists
    //3) Add the member to the group by pushing a memberId into a group.members[refer to a group Model]

    res.status(200).json({ message: 'Member added to the group successfully' });
  } catch (error) {
    console.error('Error adding member to group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteMember = async (req, res) => {
  const groupId = req.params.groupId;
  const memberId = req.params.memberId;

  try {
    //Write a code here to delete a member from a group
    // Check if the group exists
    // Check if the member exists in the group
    // Remove the member from the group using splice method

    res
      .status(200)
      .json({ message: 'Member removed from the group successfully' });
  } catch (error) {
    console.error('Error removing member from group:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  newGroup,
  getGroup,
  getAllGroups,
  updateGroup,
  addMember,
  deleteMember,
};
