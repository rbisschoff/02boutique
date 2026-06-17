const HELP_UI = {
  it: {
    hub_subtitle: 'Come possiamo aiutarti?',
    need_help: 'Hai bisogno di ulteriore aiuto?',
    help_hours: 'Siamo disponibili: Lun–Ven: 08:00–20:00; Sab–Dom: 09:00–18:00',
    back_shop: 'Torna allo shop',
    faq_heading: 'FAQ'
  },
  en: {
    hub_subtitle: 'How can we help you?',
    need_help: 'Need further assistance?',
    help_hours: 'We are available: Mon–Fri: 08:00–20:00; Sat–Sun: 09:00–18:00',
    back_shop: 'Back to shop',
    faq_heading: 'FAQ'
  }
};

const HELP_PAGES = {
  faq: {
    title: { it: 'FAQ', en: 'FAQ' },
    type: 'hub',
    categories: [
      { label: { it: 'Ordini e Consegna', en: 'Orders & Delivery' }, page: 'delivery' },
      { label: { it: 'Resi e Rimborsi', en: 'Returns & Refunds' }, page: 'returns' }
    ]
  },
  delivery: {
    title: { it: 'Ordini e Consegna', en: 'Orders & Delivery' },
    faqs: [
      {
        q: { it: 'Quali sono le modalità di consegna disponibili?', en: 'What delivery options are available?' },
        a: {
          it: 'Spedizione con corriere\n\nConsegna standard: UPS\n\nTi preghiamo di notare che non è possibile scegliere un altro corriere per la consegna.\n\nOpzioni relative al luogo di consegna:\n- L\'indirizzo della tua abitazione o un altro indirizzo a tua scelta\n- Un punto di ritiro del corriere\n- Un negozio vicino a te\n\nTi preghiamo di notare che non tutti i negozi offrono il servizio di ritiro.',
          en: 'Courier delivery\n\nStandard delivery: UPS\n\nPlease note that you cannot choose another carrier for your delivery.\n\nDelivery location options:\n- Your home address or another address of your choosing\n- A pick-up point of the carrier\n- A store near you\n\nPlease note that not all stores offer pick-up services.'
        }
      },
      {
        q: { it: 'Quali sono i tempi e i costi di consegna?', en: 'What are the delivery times and costs?' },
        a: {
          it: 'Tempi di consegna\n\nGli ordini vengono consegnati normalmente entro 3-5 giorni lavorativi dopo l\'invio della conferma d\'ordine.\n\nTi preghiamo di notare che i tempi di consegna possono variare in base al corriere e agli orari di ritiro.\n\nSpese di spedizione\n\nLe spese di spedizione ammontano a €5.90 e sono gratuite per gli ordini superiori a €100.\n\nUPS Express: €9.95 (1-3 giorni lavorativi)\n\nNotifica dei ritardi\n\nNonostante i nostri sforzi, ritardi dovuti a un maggiore carico gestito dai nostri corrieri o condizioni meteorologiche avverse potrebbero influire sui tempi di consegna previsti. Faremo del nostro meglio per informarti in caso di ulteriori ritardi. Questa pagina potrebbe subire delle modifiche.',
          en: 'Delivery times\n\nOrders are normally delivered within 3–5 business days after your order confirmation is sent.\n\nPlease note that delivery times may vary depending on the carrier and pick-up schedules.\n\nShipping costs\n\nShipping costs €5.90 and is free for orders over €100.\n\nUPS Express: €9.95 (1–3 business days)\n\nDelay notification\n\nDespite our best efforts, delays caused by increased carrier volume or adverse weather conditions may affect expected delivery times. We will do our best to inform you of any further delays. This page may be updated.'
        }
      },
      {
        q: { it: 'Il mio pacco risulta consegnato ma non ho ricevuto nulla', en: 'My parcel shows as delivered but I have not received anything' },
        a: {
          it: 'Se lo stato del tuo ordine è "consegnato" ma non hai ricevuto nulla:\n\n- Verifica se i tuoi vicini di casa hanno ritirato l\'ordine\n- Verifica se il corriere ha lasciato un avviso di consegna con le istruzioni\n\nSe ti risulta che l\'ordine non sia stato consegnato, contattaci. Uno dei nostri agenti ti fornirà il supporto necessario.',
          en: 'If your order status is "delivered" but you have not received anything:\n\n- Check whether your neighbours accepted the delivery\n- Check whether the carrier left a delivery notice with instructions\n\nIf you believe the order was not delivered, contact us. One of our agents will provide the support you need.'
        }
      },
      {
        q: { it: 'Posso modificare i dettagli del mio ordine?', en: 'Can I change my order details?' },
        a: {
          it: 'Sfortunatamente, non possiamo modificare i dettagli del tuo ordine. Se hai commesso un errore, non preoccuparti, hai diverse possibilità:\n\n- Provare a cancellare l\'ordine\n- Rifiutare il pacco al momento dell\'arrivo\n- Restituirci gratuitamente il pacco',
          en: 'Unfortunately, we cannot change your order details. If you made a mistake, don\'t worry — you have several options:\n\n- Try to cancel the order\n- Refuse the parcel on delivery\n- Return the parcel to us free of charge'
        }
      },
      {
        q: { it: 'Tentativo di consegna non riuscito', en: 'Failed delivery attempt' },
        a: {
          it: 'Se il tentativo di consegna non va a buon fine, il corriere in genere effettua una delle seguenti operazioni:\n\n- Proverà di nuovo in un secondo momento\n- Proverà a lasciare il pacco a uno dei tuoi vicini\n- Lascerà il pacco presso un punto di ritiro\n\nTieni presente che il corriere lascia una nota relativa alla soluzione scelta.',
          en: 'If a delivery attempt is unsuccessful, the carrier will usually do one of the following:\n\n- Try again at a later time\n- Try to leave the parcel with a neighbour\n- Leave the parcel at a pick-up point\n\nPlease note that the carrier leaves a note explaining the chosen solution.'
        }
      },
      {
        q: { it: 'Ordini annullati', en: 'Cancelled orders' },
        a: {
          it: 'Se sei in possesso di un account\n\nCome annullare l\'ordine entro 30 minuti dall\'acquisto:\n\n- Apri la pagina degli ordini nella sezione Il mio account\n- Se è presente il pulsante di annullamento, significa che è ancora possibile annullare l\'ordine\n- Fai clic e conferma per annullare l\'ordine\n\nSe hai effettuato l\'ordine come ospite\n\nPossiamo provare ad annullare l\'ordine per tuo conto. Contattaci il prima possibile (entro 15 minuti dall\'ordine) affinché il nostro servizio clienti possa occuparsene.\n\nSe è troppo tardi per annullare l\'ordine o se è stato elaborato più velocemente del previsto, non preoccuparti. Puoi rifiutare il pacco al momento della consegna o restituirlo in seguito, gratuitamente.\n\nEccezioni:\nGli ordini contenenti una carta regalo non possono essere annullati.',
          en: 'If you have an account\n\nHow to cancel your order within 30 minutes of purchase:\n\n- Open the orders page in My account\n- If a cancel button is shown, you can still cancel the order\n- Click and confirm to cancel the order\n\nIf you placed the order as a guest\n\nWe can try to cancel the order on your behalf. Contact us as soon as possible (within 15 minutes of ordering) so our customer service can assist.\n\nIf it is too late to cancel or the order was processed faster than expected, don\'t worry. You can refuse the parcel on delivery or return it later, free of charge.\n\nExceptions:\nOrders containing a gift card cannot be cancelled.'
        }
      },
      {
        q: { it: 'Cosa devo fare se ho ricevuto l\'articolo sbagliato?', en: 'What should I do if I received the wrong item?' },
        a: {
          it: 'Se hai ricevuto un articolo sbagliato, contattaci e il nostro servizio clienti ti fornirà il supporto necessario.',
          en: 'If you received the wrong item, contact us and our customer service will provide the support you need.'
        }
      },
      {
        q: { it: 'Cosa devo fare se manca una parte del mio ordine?', en: 'What should I do if part of my order is missing?' },
        a: {
          it: 'Se hai ricevuto un articolo sbagliato o manca una parte del tuo ordine, contattaci e il nostro servizio clienti ti fornirà il supporto necessario.',
          en: 'If you received the wrong item or part of your order is missing, contact us and our customer service will provide the support you need.'
        }
      },
      {
        q: { it: 'Cosa succede se il mio ordine viene consegnato a un indirizzo sbagliato?', en: 'What happens if my order is delivered to the wrong address?' },
        a: {
          it: 'Se l\'ordine è stato consegnato all\'indirizzo sbagliato, puoi verificare lo stato della consegna nel tuo account o utilizzare il link track & trace nell\'e-mail di conferma della spedizione.\n\nSe l\'ordine non è ancora stato consegnato, puoi contattare il corriere e verificare se è ancora possibile modificare l\'indirizzo di consegna.\n\nSe il pacco è stato rifiutato all\'indirizzo di consegna, verrà restituito al nostro magazzino. Una volta elaborato il reso, riceverai il rimborso entro 10-14 giorni.\n\nSe ti risulta che l\'ordine non sia stato consegnato, contattaci. Uno dei nostri agenti ti fornirà il supporto necessario.',
          en: 'If the order was delivered to the wrong address, you can check the delivery status in your account or use the track & trace link in the shipping confirmation email.\n\nIf the order has not yet been delivered, contact the carrier to see if the delivery address can still be changed.\n\nIf the parcel was refused at the delivery address, it will be returned to our warehouse. Once the return is processed, you will receive a refund within 10–14 days.\n\nIf you believe the order was not delivered, contact us. One of our agents will provide the support you need.'
        }
      },
      {
        q: { it: 'Perché il mio ordine è stato cancellato?', en: 'Why was my order cancelled?' },
        a: {
          it: 'Ti invieremo sempre un\'e-mail per informarti sul perché il tuo ordine è stato (parzialmente) cancellato. Nella maggior parte dei casi si tratta di uno dei seguenti motivi:\n\n- I tuoi articoli erano esauriti al momento della spedizione. In questo caso, l\'importo ti verrà rimborsato.\n- Si è verificato un errore durante la verifica dei dettagli di fatturazione e/o spedizione. In questo caso, prova a tornare indietro di un passaggio nella procedura di pagamento sul sito web e verifica i tuoi dati. Se le informazioni sono corrette, la soluzione più semplice è contattare la tua banca per vedere se possono aiutarti ad ottenere maggiori informazioni. Se il problema è riguardante la spedizione, verifica il tuo indirizzo e assicurati che si trovi nello stesso Paese del sito web da cui hai effettuato l\'ordine.\n- È presente un ordine duplicato.\n\nTi preghiamo di verificare l\'ordine originale. Potrebbe essere già stato confermato e/o spedito.\n\nSe il problema persiste, contattaci, affinché il nostro servizio clienti possa fornire maggiore assistenza.',
          en: 'We will always send you an email explaining why your order was (partially) cancelled. In most cases it is one of the following reasons:\n\n- Your items were out of stock at the time of shipping. In this case, you will be refunded.\n- An error occurred while verifying billing and/or shipping details. Go back one step in the checkout process and verify your details. If the information is correct, contact your bank for more information. If the issue relates to shipping, check your address and ensure it is in the same country as the website you ordered from.\n- A duplicate order exists.\n\nPlease check the original order — it may already have been confirmed and/or shipped.\n\nIf the problem persists, contact us so our customer service can assist further.'
        }
      },
      {
        q: { it: 'Quali sono le e-mail riguardanti il mio ordine che riceverò?', en: 'What order-related emails will I receive?' },
        a: {
          it: 'Dopo aver effettuato l\'ordine, ti invieremo alcune e-mail per aggiornarti sul suo stato.\n\nE-mail relative all\'ordine e alla spedizione\n\n- Un\'e-mail di conferma dell\'ordine ti informerà che abbiamo ricevuto il tuo ordine.\n- Un\'e-mail di conferma dell\'avvenuta spedizione ti informerà che il tuo ordine è stato elaborato. Questa e-mail include un numero di tracciamento, il quale sarà attivato entro 24-48 ore.\n- Riceverai anche un\'e-mail contenente la fattura relativa il tuo ordine.\n\nEmail relative al reso e alla cancellazione\n\n- L\'e-mail di conferma del reso ti informerà dell\'avvenuta ricezione del tuo reso e che il nostro personale di magazzino è soddisfatto delle sue condizioni. L\'e-mail indica inoltre che la procedura di rimborso è stata avviata.\n- Se necessario, l\'e-mail di annullamento dell\'ordine conferma che il tuo ordine è stato cancellato.\n\nQueste e-mail potrebbero finire nella cartella spam, quindi assicurati di controllare la tua casella della posta indesiderata o di aggiungere il nostro indirizzo e-mail alle tue eccezioni per gli spam.',
          en: 'After placing your order, we will send you emails to keep you updated on its status.\n\nOrder and shipping emails\n\n- An order confirmation email confirms we received your order.\n- A shipping confirmation email confirms your order has been processed. This email includes a tracking number, which will be activated within 24–48 hours.\n- You will also receive an invoice email for your order.\n\nReturn and cancellation emails\n\n- A return confirmation email confirms we received your return and that our warehouse team approved its condition. It also confirms the refund process has started.\n- If applicable, a cancellation email confirms your order was cancelled.\n\nThese emails may land in your spam folder — check junk mail or add our email address to your safe senders list.'
        }
      },
      {
        q: { it: 'Dove si trova il mio ordine?', en: 'Where is my order?' },
        a: {
          it: 'Tracciare un ordine effettuato da account\n\n- Vai su "Ordini" nel menu Il mio account\n- Fai clic su "Visualizza ordine"\n- Controlla lo stato dell\'ordine\n- Se l\'ordine è stato spedito, apparirà il pulsante "Traccia ordine" che ti rimanda al sito web del corriere.\n\nMonitoraggio degli ordini effettuati come ospite\n\nSe hai effettuato l\'ordine come ospite, puoi vedere qui lo stato aggiornato del tuo ordine: Pagina Lo stato dell\'ordine.\n\nTrovi questa pagina anche nel footer del nostro sito web.',
          en: 'Track an order placed with an account\n\n- Go to "Orders" in the My account menu\n- Click "View order"\n- Check the order status\n- If the order has shipped, a "Track order" button will link to the carrier website.\n\nTrack guest orders\n\nIf you placed the order as a guest, you can view your updated order status on the Order status page.\n\nYou can also find this page in the footer of our website.'
        }
      }
    ]
  },
  returns: {
    title: { it: 'Resi e Rimborsi', en: 'Returns & Refunds' },
    faqs: [
      {
        q: { it: 'Posso tracciare il mio reso?', en: 'Can I track my return?' },
        a: {
          it: 'Puoi seguire il tuo reso attraverso il sito web del corriere, non appena avrà confermato il ritiro del pacco. In seguito alla restituzione di un ordine, ti verrà fornito un numero di tracciamento.\n\nCon il numero di tracciamento, potrai verificare lo stato aggiornato del tuo reso su UPS.\n\nNon appena gli articoli restituiti verranno consegnati al nostro magazzino, ti invieremo una e-mail di conferma del reso e del rimborso.',
          en: 'You can track your return on the carrier website once they confirm collection of the parcel. After returning an order, you will receive a tracking number.\n\nWith the tracking number, you can check the latest status of your return on UPS.\n\nOnce returned items reach our warehouse, we will send you a return and refund confirmation email.'
        }
      },
      {
        q: { it: 'Come restituire in negozio', en: 'How to return in store' },
        a: {
          it: 'Come restituire in negozio\n\nPuoi restituire i tuoi articoli in alcuni dei nostri negozi! Segui semplicemente questi semplici passaggi:\n\n- Trova il negozio più vicino: Usa il nostro localizzatore di negozi per trovare una posizione che sia più comoda per te. Puoi filtrare sui servizi di "restituzione in negozio" per ottenere i migliori risultati.\n- Porta i tuoi articoli in negozio: Imballa gli articoli che desideri restituire e recati al negozio selezionato. Non serve un appuntamento; passa semplicemente durante gli orari di apertura regolari.\n- Tieni pronto il numero dell\'ordine: Per aiutare il nostro personale a elaborare il tuo reso in modo rapido, assicurati di avere il numero dell\'ordine a portata di mano. Lo trovi nell\'email di conferma dell\'ordine o accedendo al tuo account sul nostro sito web.\n- Lascia che il nostro staff faccia il resto: Il nostro team in negozio esaminerà e elaborerà il tuo reso direttamente sul posto. Ci assicureremo che tutto venga gestito lo stesso giorno.\n- Ricevi la notifica di rimborso: Una volta che il reso sarà elaborato, ti invieremo un\'email per confermare il rimborso. Dovresti vedere l\'importo rimborsato nel tuo conto entro 8-10 giorni lavorativi, a seconda dei tempi di elaborazione della tua banca.\n\nRestituisci articoli da più ordini? Assicurati di utilizzare le scatole originali corrispondenti alle etichette e agli ordini. Questo ci aiuta a elaborare i tuoi resi con precisione.',
          en: 'How to return in store\n\nYou can return your items at selected stores! Simply follow these steps:\n\n- Find your nearest store: Use our store locator to find a convenient location. Filter by "in-store returns" for the best results.\n- Bring your items to the store: Pack the items you wish to return and visit the selected store during regular opening hours — no appointment needed.\n- Have your order number ready: To help our staff process your return quickly, keep your order number handy. You will find it in your order confirmation email or in your account on our website.\n- Let our staff take care of the rest: Our in-store team will review and process your return on the spot, usually the same day.\n- Receive your refund notification: Once processed, we will email you to confirm your refund. You should see the amount on your account within 8–10 business days, depending on your bank.\n\nReturning items from multiple orders? Use the original boxes matching the labels and orders so we can process your returns accurately.'
        }
      },
      {
        q: { it: 'La nostra politica di reso', en: 'Our return policy' },
        a: {
          it: 'Vogliamo che tu sia completamente soddisfatto del tuo acquisto, quindi abbiamo reso il nostro processo di reso il più semplice possibile. Ecco cosa devi sapere:\n\n- La nostra finestra di reso di 30 giorni: Hai fino a 30 giorni dal giorno in cui il tuo ordine è stato consegnato per restituire qualsiasi articolo.\n- Condizione degli articoli: Assicurati che gli articoli che stai restituendo siano nelle condizioni originali, con tutte le etichette ancora attaccate. Questo significa che l\'articolo deve essere non indossato, non lavato, e nello stesso stato in cui l\'hai ricevuto.\n- Eccezioni: I seguenti prodotti non possono essere restituiti: articoli incompleti, indossati o lavati, articoli personalizzati e carte regalo (parzialmente) utilizzate. Per motivi igienici, biancheria intima, costumi da bagno, profumi e trucco non possono essere restituiti a meno che l\'imballo originale sigillato non sia completamente intatto, salvo diversamente indicato nei termini e condizioni.\n- Restituzione di più ordini: Se stai restituendo articoli da più ordini, utilizza le scatole originali e le etichette di reso che corrispondono a ciascun ordine. Questo ci aiuta a elaborare i tuoi resi con precisione.\n\nPer ulteriori informazioni sui resi, puoi visitare la nostra pagina Termini e Condizioni.',
          en: 'We want you to be completely satisfied with your purchase, so we have made our return process as simple as possible. Here is what you need to know:\n\n- Our 30-day return window: You have up to 30 days from the day your order was delivered to return any item.\n- Item condition: Items must be in original condition with all tags attached — unworn, unwashed, and in the same state you received them.\n- Exceptions: The following cannot be returned: incomplete, worn or washed items, personalised items, and (partially) used gift cards. For hygiene reasons, underwear, swimwear, fragrances and make-up cannot be returned unless the original sealed packaging is fully intact, unless otherwise stated in the terms and conditions.\n- Multiple orders: When returning items from multiple orders, use the original boxes and return labels matching each order.\n\nFor more information, see our Terms & Conditions page.'
        }
      },
      {
        q: { it: 'In caso di reso, le spese di spedizione mi verranno rimborsate?', en: 'Will shipping costs be refunded if I return my order?' },
        a: {
          it: 'Se restituisci un intero ordine, ti verrà rimborsato l\'importo totale. In caso di reso parziale, le spese di spedizione non verranno rimborsate.',
          en: 'If you return your entire order, you will receive a full refund. For partial returns, shipping costs will not be refunded.'
        }
      },
      {
        q: { it: 'Come effettuare un reso tramite corriere', en: 'How to return via courier' },
        a: {
          it: 'Come restituire tramite corriere\n\nDevi restituire (alcuni dei) tuoi articoli? Nessun problema. Segui semplicemente questi passaggi:\n\n- Non devi registrare il tuo reso: L\'etichetta di reso nella scatola originale è già attivata. Appena la usi, verremo avvisati.\n- Imballa i tuoi articoli: Metti gli articoli nella scatola di spedizione originale, se ce l\'hai ancora.\n- Usa l\'etichetta di reso: Un\'etichetta di reso è disponibile nella scatola di spedizione originale. Incollala in modo sicuro sopra l\'etichetta di consegna originale sulla scatola.\n- Lascia il pacco: Vai a un punto di consegna del tuo corriere. Se non sei sicuro di dove andare, controlla il sito web del tuo corriere per trovare la sede più vicina.\n- Richiedi una prova di spedizione: Se disponibile, richiedi una prova di spedizione o un codice di tracciamento del reso quando lasci il pacco.\n- Aggiornamenti sullo stato del reso: Ti invieremo un\'e-mail una volta che il pacco sarà arrivato al nostro magazzino per confermare che verrà elaborato un rimborso. Puoi tracciare il tuo reso sulla nostra pagina "stato dell\'ordine" nel footer o sul sito del corriere, utilizzando un codice di tracciamento sul tuo prova di spedizione (il codice di tracciamento si trova anche sull\'etichetta di reso).\n- Processo di rimborso: Una volta ricevuti i tuoi articoli (questo può richiedere fino a 5 giorni lavorativi), elaboreremo il tuo rimborso. Il rimborso verrà accreditato sullo stesso metodo di pagamento che hai usato per l\'acquisto. I rimborsi di solito richiedono 8-14 giorni lavorativi per apparire sul tuo estratto conto. La durata dipende dalla politica della tua banca. Puoi sempre contattare la tua banca per qualsiasi domanda.\n\nRestituisci articoli da più ordini? Assicurati di utilizzare le scatole originali corrispondenti alle etichette e agli ordini. Questo ci aiuta a elaborare i tuoi resi con precisione.\n\nSe hai già usato l\'etichetta di reso per una restituzione parziale, o se l\'etichetta manca, contattaci per riceverne una nuova.',
          en: 'How to return via courier\n\nNeed to return (some of) your items? No problem. Simply follow these steps:\n\n- No need to register your return: The return label in the original box is already activated. As soon as you use it, we are notified.\n- Pack your items: Place items in the original shipping box if you still have it.\n- Use the return label: A return label is included in the original shipping box. Securely stick it over the original delivery label on the box.\n- Drop off the parcel: Visit a drop-off point of your carrier. Check the carrier website to find the nearest location.\n- Request proof of shipment: If available, ask for proof of shipment or a return tracking code when you drop off the parcel.\n- Return status updates: We will email you once the parcel arrives at our warehouse to confirm your refund will be processed. Track your return on our order status page in the footer or on the carrier website using the tracking code on your proof of shipment (also on the return label).\n- Refund process: Once we receive your items (up to 5 business days), we process your refund to the same payment method used for purchase. Refunds usually take 8–14 business days to appear on your statement, depending on your bank.\n\nReturning items from multiple orders? Use the original boxes matching the labels and orders.\n\nIf you already used the return label for a partial return, or the label is missing, contact us for a new one.'
        }
      },
      {
        q: { it: 'Posso cambiare il mio prodotto/i miei prodotti?', en: 'Can I exchange my product(s)?' },
        a: {
          it: 'Al momento non offriamo un servizio di cambio. Se desideri l\'articolo/gli articoli in un colore o in una taglia diversi, ti basterà effettuare un reso entro il periodo di reso indicato nella nostra politica di reso, che puoi trovare in questa sezione FAQ. Il rimborso totale verrà emesso entro 8-10 giorni lavorativi dall\'elaborazione del tuo reso. Puoi ordinare gli articoli mentre aspetti o dopo che il rimborso sarà stato elaborato.',
          en: 'We do not currently offer exchanges. If you want the item(s) in a different colour or size, simply return them within the return period stated in our return policy in this FAQ section. A full refund will be issued within 8–10 business days after your return is processed. You can place a new order while waiting or after the refund is processed.'
        }
      },
      {
        q: { it: 'Quando riceverò il rimborso dopo aver restituito il mio ordine?', en: 'When will I receive my refund after returning my order?' },
        a: {
          it: 'Di solito sono necessari fino a cinque (5) giorni lavorativi affinché un reso raggiunga il nostro magazzino. Una volta ricevuto, il pacco viene scansionato e il rimborso viene attivato automaticamente.\n\nDopo aver elaborato il tuo reso nel nostro magazzino, saranno necessari circa 8-10 giorni lavorativi affinché il rimborso sia visibile sul tuo conto bancario. Utilizzeremo lo stesso metodo di pagamento adoperato al momento dell\'ordine.\n\nPer ricevere gli ultimi aggiornamenti sul tuo rimborso, è più semplice controllare direttamente il tuo conto bancario. Se hai pagato con carta di credito e nessun importo è stato detratto dal tuo conto, l\'importo riservato verrà restituito sul tuo conto bancario.',
          en: 'It usually takes up to five (5) business days for a return to reach our warehouse. Once received, the parcel is scanned and the refund is triggered automatically.\n\nAfter we process your return in our warehouse, it takes approximately 8–10 business days for the refund to appear in your bank account. We use the same payment method as your original order.\n\nFor the latest updates on your refund, check your bank account directly. If you paid by credit card and no amount was debited, the reserved amount will be released back to your account.'
        }
      },
      {
        q: { it: 'Come tracciare un pacco di reso', en: 'How to track a return parcel' },
        a: {
          it: 'Tracciamento del reso se hai un account\n\nPer vedere lo stato attuale del tuo reso, puoi seguire questi passaggi:\n\n- Vai alla pagina "il mio account"\n- Naviga verso i tuoi ordini\n- Clicca su uno degli ordini che contengono un reso\n- Lo stato del reso e gli aggiornamenti sono disponibili lì\n\nTracciamento del reso come ospite\n\nPer vedere lo stato attuale del tuo reso, puoi seguire questi passaggi:\n\n- Vai alla pagina "stato dell\'ordine" nel footer\n- Inserisci il tuo numero d\'ordine e il codice postale\n- Lo stato del reso e gli aggiornamenti sono disponibili lì\n\nI resi di solito raggiungono il nostro magazzino in circa 5 giorni lavorativi, a seconda della frequenza di ritiro del corriere.\n\nA seconda del corriere, potresti non vedere tutti i dettagli disponibili. Puoi visitare il sito web del corriere per vedere ulteriori dettagli, utilizzando il numero di tracciamento del reso, che si trova sull\'etichetta di reso o sulla prova di reso (se disponibile).',
          en: 'Track a return if you have an account\n\nTo see the current status of your return:\n\n- Go to "My account"\n- Navigate to your orders\n- Click an order that includes a return\n- Return status and updates are shown there\n\nTrack a return as a guest\n\n- Go to the "Order status" page in the footer\n- Enter your order number and postal code\n- Return status and updates are shown there\n\nReturns usually reach our warehouse in about 5 business days, depending on carrier pick-up frequency.\n\nDepending on the carrier, not all details may be visible. Visit the carrier website for more details using the return tracking number on the return label or proof of return (if available).'
        }
      },
      {
        q: { it: 'Dove posso trovare (o scaricare) la mia etichetta di reso?', en: 'Where can I find (or download) my return label?' },
        a: {
          it: 'Di solito l\'etichetta di reso è già nella scatola originale.\n\nSe ti serve una copia (perché l\'etichetta non c\'era o l\'hai persa), segui questi passaggi:\n\nSe sei membro\n\n- Vai su Il mio account > I miei ordini > Dettagli ordine degli articoli che vuoi restituire\n- In fondo, nella sezione Resi e rimborsi, clicca su Scarica etichetta di reso\n- Stampa il PDF e attaccalo sulla scatola originale per avviare il reso\n\nSe sei ospite\n\n- Usa la pagina Verifica stato ordine in fondo al nostro sito\n- Inserisci il numero d\'ordine e il CAP, poi vai su Dettagli ordine\n- In fondo, nella sezione Resi e rimborsi, clicca su Scarica etichetta di reso\n- Stampa il PDF e attaccalo sulla scatola originale per avviare il reso\n\nTi serve una nuova etichetta (non una copia)?\n\nSe hai già fatto un reso parziale per quest\'ordine e ti serve un\'altra etichetta, clicca su ho bisogno di aiuto sotto queste FAQ e contattaci. Un nostro agente ti aiuterà a ottenerne una nuova.\n\nRicorda che i resi devono essere effettuati entro 30 giorni. Se l\'ordine è più vecchio, il pulsante per scaricare l\'etichetta potrebbe non esserci più. I nostri agenti non potranno darti un\'etichetta nuova se il termine è scaduto.',
          en: 'The return label is usually already in the original box.\n\nIf you need a copy (because the label was missing or lost), follow these steps:\n\nIf you are a member\n\n- Go to My account > My orders > Order details for the items you want to return\n- At the bottom, under Returns & refunds, click Download return label\n- Print the PDF and attach it to the original box to start your return\n\nIf you are a guest\n\n- Use the Check order status page in the footer\n- Enter your order number and postal code, then go to Order details\n- At the bottom, under Returns & refunds, click Download return label\n- Print the PDF and attach it to the original box to start your return\n\nNeed a new label (not a copy)?\n\nIf you already made a partial return for this order and need another label, contact us under Need help below. An agent will help you get a new one.\n\nReturns must be made within 30 days. If the order is older, the download button may no longer appear. Our agents cannot provide a new label once the period has expired.'
        }
      }
    ]
  }
};
