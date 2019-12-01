import R from 'ramda';

const deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,5C,8C';
const response1 = {shuffled: true, deck_id: "em2m1ub4di9r", remaining: 4, success: true};
const response2 = {"deck_id": "uqaync99leu0", "remaining": 0, "cards": [{"images": {"png": "https://deckofcardsapi.com/static/img/8C.png", "svg": "https://deckofcardsapi.com/static/img/8C.svg"}, "suit": "CLUBS", "value": "8", "code": "8C", "image": "https://deckofcardsapi.com/static/img/8C.png"}, {"images": {"png": "https://deckofcardsapi.com/static/img/5C.png", "svg": "https://deckofcardsapi.com/static/img/5C.svg"}, "suit": "CLUBS", "value": "5", "code": "5C", "image": "https://deckofcardsapi.com/static/img/5C.png"}, {"images": {"png": "https://deckofcardsapi.com/static/img/2S.png", "svg": "https://deckofcardsapi.com/static/img/2S.svg"}, "suit": "SPADES", "value": "2", "code": "2S", "image": "https://deckofcardsapi.com/static/img/2S.png"}, {"images": {"png": "https://deckofcardsapi.com/static/img/AS.png", "svg": "https://deckofcardsapi.com/static/img/AS.svg"}, "suit": "SPADES", "value": "ACE", "code": "AS", "image": "https://deckofcardsapi.com/static/img/AS.png"}], "success": true}
const fetchData = () => Promise.resolve(response);

test('exercice19', (done) => {
  fetchData().then(res => {
      const coucou = res.json(); //?
      done();
    });
});