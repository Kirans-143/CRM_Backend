const User = require("../models/user.model");
const Ticket = require("../models/ticket.model");
const constants = require("../utils/constants");

exports.createTicket = async (req, res) => {
  const ticketObject = {
    title: req.body.title,
    ticketPriority: req.body.ticketPriority,
    description: req.body.description,
    status: req.body.status,
    reporter: req.userId, //coming from authJwt middleware
  };
  //Assign engineer to the ticket which is in approved state
  const engineer = await User.findOne({
    userType: constants.userTypes.engineer,
    userStatus: constants.userStatus.approved,
  });

  ticketObject.assignee = engineer.userId;

  try {
    const ticket = await Ticket.create(ticketObject);

    if (ticket) {
      //update the customer
      const user = await User.findOne({
        userId: req.userId,
      });
      user.ticketsCreated.push(ticket._id);
      await user.save();

      //update the engineer
      if (engineer) {
        engineer.ticketsAssigned.push(ticket._id);
        await engineer.save();
      }
      return res.status(200).send(ticket);
    }
  } catch (err) {
    return res.status(500).send({
      message: "Some internal error occured",
    });
  }
};

exports.updateTicket = async (req, res) => {
  //Only one who has created the ticket can update the ticket
  const ticket = await Ticket.findOne({ _id: req.params.id });

  if (ticket && ticket.reporter == req.userId) {
    //Allowed to update
    (ticket.title =
      req.body.title != undefined ? req.body.title : ticket.title),
      (ticket.description =
        req.body.description != undefined
          ? req.body.description
          : ticket.description),
      (ticket.ticketPriority =
        req.body.ticketPriority != undefined
          ? req.body.ticketPriority
          : ticket.ticketPriority),
      (ticket.status =
        req.body.status != undefined ? req.body.status : ticket.status);

    var updatedTicket = await ticket.save();

    return res.status(200).send(updatedTicket);
  } else {
    res.status(401).send({
      message: "Ticket can only updated by the customer who created it",
    });
  }
};

exports.getAllTickets = async (req, res) => {
  const queryObject = {
    reporter: req.userId,
  };
  const tickets = await Ticket.find(queryObject);

  if (tickets) {
    return res.status(200).send(tickets);
  }
};

exports.getOneTicket = (req, res) => {};
