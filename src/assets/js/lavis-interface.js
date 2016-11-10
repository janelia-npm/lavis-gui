var ros = new ROSLIB.Ros();

ros.on('connection', function() {
  console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});

ros.connect('ws://localhost:9090');

// var chatterTopic = new ROSLIB.Topic({
//   ros : ros,
//   name : '/chatter',
//   messageType : 'std_msgs/String'
// });

// var chatterMsg = new ROSLIB.Message({
//   data: 'testing!!!'
// });

// function publishChatterMsg(message) {
//   chatterMsg.data = message;
//   chatterTopic.publish(chatterMsg);
// };

var thresholdDefault = 100;

var thresholdMessage = new ROSLIB.Message({
  data : thresholdDefault
});

var thresholdTopic = new ROSLIB.Topic({
  ros : ros,
  name : '/camera/larvae_behavior_classifier/set_threshold',
  messageType : 'std_msgs/Float32'
});

function setThreshold(theshold) {
  thresholdMessage.data = threshold;
  thresholdTopic.publish(thresholdMessage);
};

// var headCastWaitDefault = 10;
// var headCastExpTimeDefault = 300; // seconds
// var headCastMinLarvalRunTimeDefault = 0 ; // this means that it's essentially disabled
// var headCastCastLeftDurationDefault = 10; // we give stimuli up to 2 seconds
// var headCastCastRightDurationDefault = 10;
// var headCastMaxOptoTimeDefault = 10;

// var castLeftChannelDefault = 2;
// var castLeftCurrentDefault = 60;
// var castRightChannelDefault = 2;
// var castRightCurrentDefault = 30;
// var castBackgroundChannelDefault = 1;
// var castBackgroundCurrentDefault = 50;

// var spatialWaitDefault = 10;
// var spatialXChannelDefault = 1;
// var spatialRadialGradientDefault = 1;
// var spatialdead_zoneDefault = 5;

// var stochasticWaitDefault = 10;
// var stochasticStimulusCurrentDefault = 225;
// var stochasticStimulusChannelDefault = 2;
// var stochasticLeftProbabilityDefault = 0.5;
// var stochasticRightProbabilityDefault = 0.5;
// var stochasticBackgroundChannelDefault = 1;
// var stochasticBackgroundCurrentDefault = 250;

// var gaussianWaitDefault = 10;
// var gaussianStimulusChannelDefault = 2;
// var gaussianStdDevDefault = 40;
// var gaussianLeftMeanDefault = 50;
// var gaussianRightMeanDefault = 100;
// var gaussianBackgroundChannelDefault = 1;
// var gaussianBackgroundCurrentDefault = 250;

// var randomizeStimulusSide = false;

// var experimentalTime = 0;

// var experimentElapsedTime = 0;
// var experimentTimer ;
// var experimentTimerPeriod = 50;
// var experimentTimerStatus ;

// var timerStatus;
// var periodStatus = 1000;
// var status;
// var begin = true;

// var emptyMsg = new ROSLIB.Message({
// });

// var startStageController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/lavis_stage_controller_node/start',
//   messageType : 'std_msgs/Empty'
// });

// var stopStageController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/lavis_stage_controller_node/stop',
//   messageType : 'std_msgs/Empty'
// });

// // We want to know the instant current so we can plot if we want !
// var cmdCurrent = new ROSLIB.Topic({
//   ros : ros,
//   name : '/mightex_controller_node/cmd_current',
//   messageType : 'mightex_controller/CmdCurrent'
// });

// var saveBackgroundImage = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/blob_tracker/save_background_image',
//   messageType : 'std_msgs/Empty'
// });

// var startDataWriter = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/larvae_data_writer/start',
//   messageType : 'std_msgs/Empty'
// });

// var startDataWriterSpatial = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/larvae_data_writer/startSpatial',
//   messageType : 'lavis_stimuli_controller/SpatialStimuli'
// });

// var startDataWriterHeadCast = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/larvae_data_writer/startHeadCast',
//   messageType : 'lavis_stimuli_controller/HeadCastStimuli'
// });

// var stopDataWriter = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/larvae_data_writer/stop',
//   messageType : 'std_msgs/Empty'
// });

// var clearBuffers = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/larvae_behavior_classifier/clear_buffers',
//   messageType : 'std_msgs/Empty'
// });

// var startHeadCastController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/head_cast_node/start',
//   messageType : 'lavis_stimuli_controller/HeadCastStimuli'
// });

// var startHeadCastSimpleController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/head_cast_simple_node/start',
//   messageType : 'lavis_stimuli_controller/HeadCastStimuli'
// });

// var headCastStimuliMsg = new ROSLIB.Message({
//   wait : {
//     secs : headCastWaitDefault
//   },
//   cast_left_channel : castLeftChannelDefault,
//   cast_left_current : castLeftCurrentDefault,
//   cast_right_channel : castRightChannelDefault,
//   cast_right_current : castRightCurrentDefault,
//   cast_background_channel : castBackgroundChannelDefault,
//   cast_background_current : castBackgroundCurrentDefault,
//   randomize_stimulus_side : randomizeStimulusSide,
//   effector : 'Empty',
//   driver : 'Empty',
//   experiment_time : {
//     secs : headCastExpTimeDefault
//   },
//   min_larval_run_time : {
//     secs : headCastMinLarvalRunTimeDefault
//   },
//   cast_left_duration : { // see below, we're using a new variable just for this
//     secs : headCastMaxOptoTimeDefault
//   },
//   cast_right_duration : {
//     secs : headCastMaxOptoTimeDefault
//   },
//   use_headcast_order : false,
//   max_optogenetic_stim_time: {
//     secs : headCastMaxOptoTimeDefault
//   }

// });

// var stopHeadCastController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/head_cast_node/stop',
//   messageType : 'std_msgs/Empty'
// });

// var stopHeadCastSimpleController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/head_cast_simple_node/stop',
//   messageType : 'std_msgs/Empty'
// });

// var startSpatialController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/spatial_node/start',
//   messageType : 'lavis_stimuli_controller/SpatialStimuli'
// });

// var spatialStimuliMsg = new ROSLIB.Message({
//   wait : {
//     secs : spatialWaitDefault
//   },
//   x_channel : spatialXChannelDefault,
//   radial_gradient : spatialRadialGradientDefault,
//   dead_zone : spatialdead_zoneDefault,
//   effector : 'Empty', //$("#effectors").val(),
//   driver : 'Empty' // $("#drivers").val()
//   // y_channel : spatialYChannelDefault,
//   // y_current_factor : spatialYCurrentFactorDefault
// });

// var stopSpatialController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/spatial_node/stop',
//   messageType : 'std_msgs/Empty'
// });

// var startStochasticController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/stochastic_node/start',
//   messageType : 'lavis_stimuli_controller/StochasticStimuli'
// })

// var stochasticStimuliMsg = new ROSLIB.Message({
//   wait : {
//     secs : stochasticWaitDefault
//   },
//   stochastic_current : stochasticStimulusCurrentDefault,
//   stochastic_stimulus_channel : stochasticStimulusChannelDefault,
//   stochastic_left_probability    : stochasticLeftProbabilityDefault,
//   stochastic_right_probability   : stochasticRightProbabilityDefault,
//   stochastic_background_channel : stochasticBackgroundChannelDefault,
//   stochastic_background_current : stochasticBackgroundCurrentDefault
// })

// var stopStochasticController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/stochastic_node/stop',
//   messageType : 'std_msgs/Empty'
// })

// var startGaussianController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/gaussian_node/start',
//   messageType : 'lavis_stimuli_controller/GaussianStimuli'
// })

// var gaussianStimuliMsg = new ROSLIB.Message({
//   wait : {
//     secs : gaussianWaitDefault
//   },
//   gaussian_std_dev : gaussianStdDevDefault,
//   gaussian_stimulus_channel : gaussianStimulusChannelDefault,
//   gaussian_left_mean : gaussianLeftMeanDefault,
//   gaussian_right_mean : gaussianRightMeanDefault,
//   gaussian_background_channel : gaussianBackgroundChannelDefault,
//   gaussian_background_current : gaussianBackgroundCurrentDefault
// })

// var stopGaussianController = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/gaussian_node/stop',
//   messageType : 'std_msgs/Empty'
// })

// var features = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/features',
//   messageType : 'larvae_behavior_classifier/Features'
// });

// var behavior = new ROSLIB.Topic({
//   ros : ros,
//   name : '/camera/behavior',
//   messageType : 'larvae_behavior_classifier/Behavior'
// });

// var moveAbsolutePercentClient = new ROSLIB.ActionClient({
//   ros : ros,
//   serverName : '/zaber_stage_node/move_absolute_percent',
//   actionName : '/zaber_stage/MoveAction'
// });

// var moveGoal = new ROSLIB.Goal({
//   actionClient : moveAbsolutePercentClient,
//   goalMessage : {
//     pose : {
//       position : {
//         x : 50,
//         y : 50,
//         z : 0
//       },
//       orientation : {
//         x : 0,
//         y : 0,
//         z : 0,
//         w : 0
//       }
//     }
//   }
// });

// moveGoal.on('result', function(result) {
//   console.log('Final Move Position: ' + result.pose);
// });
