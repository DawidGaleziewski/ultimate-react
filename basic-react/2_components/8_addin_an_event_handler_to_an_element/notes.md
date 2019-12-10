#Event handling
    !important about event handlers in React:
    When we create a onClick handler in React, it is not the native browser method calling it.
    *what calls the event is react sytetic onClick.
    *the great thing about this. Is that those events in React are wrappers, and they will solve cross browser related issues for us!