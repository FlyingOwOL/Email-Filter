function filterEmails() {
  let threads = GmailApp.search("is:unread"); //add "from:" and the email of the recipient to specify more

  // mark emails as read if their subject starts with the following:
  const subjectFilters = ["[FMO-Laguna]", "[DIS]", 
                          "[LSPO]", "[LITERATURE]", 
                          "[LIBRARIES]", "[DIPO]",
                          "[OFFICE OF THE PRESIDENT]",
                          "[CDO]", "[OFFICE OF THE VP FOR FINANCE]",
                          "[STRATCOM]", "[OSA]", "Recent Canvas Notifications"];

  for(let thread of threads){
    let messages = thread.getMessages();  

    for(let msg of messages){
      let subject = msg.getSubject();  //gets entire subject line

      if (subjectFilters.some(filter => subject.startsWith(filter))){ 
        thread.markRead();
        break;
      }
    }
  }
}
