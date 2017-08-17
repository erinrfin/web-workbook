'use strict';

function dragBlock(e) {
  var blockValue = $(e.target).data("block"); //seleting a 25, 50, 75, or 100, and then reading the data from it
  e.dataTransfer.setData("block", blockValue);
}

function allowDrop(e) {
  e.preventDefault();
}

function dropBlock(e) {
  e.preventDefault();

  var blockValue = e.dataTransfer.getData("block");
  var $stack = $(e.target);
  var $block = $("[data-block=" + blockValue +"]");

  //when the stack is empty we append the block
  if($stack.children().length === 0) {
    $stack.append($block);
  }

  //when the stack already has a block, the dropped block must be smaller
  else {
    //get the value of the top block                           0    1   2
    var children = $stack.children(); //this is an array, ex [100, 75, 50]
    var length = $stack.children().length; //length would be 3, the length - 1 is the last child.
    var topChild = children[length - 1];
    var topChildBlockValue = $(topChild).data("block");

    //compare it with the block that is being dropped
    if (blockValue < topChildBlockValue){
      $stack.append($block);
    }
  }

  toggleDragAttribute();
}

//only move the top block per stack

function toggleDragAttribute() {
  for (var i = 0;

  var children = $("[data-stack=1]").children();

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    $(child).removeAttr("draggable");
  }

  //put back the draggable to the top child
  $(children[children.length - 1]).attr("draggable", "true");

}
