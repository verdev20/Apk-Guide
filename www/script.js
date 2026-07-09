// ---------- NAVBAR SCROLL STATE ----------
const navbar = document.getElementById('navbar');
function updateNavbar(){
  if(window.scrollY > 40){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavbar);
updateNavbar();

// ---------- SLIDE MENU ----------
const menuToggle = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');
const slideMenuOverlay = document.getElementById('slideMenuOverlay');
const slideMenuClose = document.getElementById('slideMenuClose');

function openMenu(){
  slideMenu.classList.add('open');
  slideMenuOverlay.classList.add('open');
  menuToggle.setAttribute('aria-expanded','true');
  slideMenu.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeMenu(){
  slideMenu.classList.remove('open');
  slideMenuOverlay.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  slideMenu.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
slideMenuClose.addEventListener('click', closeMenu);
slideMenuOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.slide-menu-links a').forEach(link=>{
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeMenu();
});

// ---------- ITINERARY PLANNER ----------
const STORAGE_KEY = 'bantayan-itinerary';
const placeSelect = document.getElementById('placeSelect');
const addPlaceBtn = document.getElementById('addPlaceBtn');
const itineraryList = document.getElementById('itineraryList');
const itineraryEmpty = document.getElementById('itineraryEmpty');
const clearItineraryBtn = document.getElementById('clearItineraryBtn');

function loadItinerary(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}
function saveItinerary(items){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
function renderItinerary(){
  const items = loadItinerary();
  itineraryList.innerHTML = '';
  if(items.length === 0){
    itineraryEmpty.style.display = 'block';
  } else {
    itineraryEmpty.style.display = 'none';
    items.forEach((item, index)=>{
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = (index+1) + '. ' + item;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', ()=>{
        const current = loadItinerary();
        current.splice(index,1);
        saveItinerary(current);
        renderItinerary();
      });
      li.appendChild(span);
      li.appendChild(removeBtn);
      itineraryList.appendChild(li);
    });
  }
}

addPlaceBtn.addEventListener('click', ()=>{
  const value = placeSelect.value;
  if(!value) return;
  const items = loadItinerary();
  items.push(value);
  saveItinerary(items);
  placeSelect.value = '';
  renderItinerary();
});

clearItineraryBtn.addEventListener('click', ()=>{
  saveItinerary([]);
  renderItinerary();
});

renderItinerary();

// ---------- BUDGET ESTIMATOR ----------
const budgetDays = document.getElementById('budgetDays');
const budgetPeople = document.getElementById('budgetPeople');
const budgetStyle = document.getElementById('budgetStyle');
const calcBudgetBtn = document.getElementById('calcBudgetBtn');
const budgetValue = document.getElementById('budgetValue');

function calculateBudget(){
  const days = Math.max(1, parseInt(budgetDays.value, 10) || 1);
  const people = Math.max(1, parseInt(budgetPeople.value, 10) || 1);
  const perDayPerPerson = parseInt(budgetStyle.value, 10);
  const total = days * people * perDayPerPerson;
  budgetValue.textContent = '\u20B1' + total.toLocaleString('en-PH');
}

calcBudgetBtn.addEventListener('click', calculateBudget);
calculateBudget();

// ---------- CHATBOT ----------
const chatFab = document.getElementById('chatFab');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatQuick = document.getElementById('chatQuick');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

// Knowledge base: each entry has keywords to match against user input,
// and an answer. Order matters — first strong match wins.
const KNOWLEDGE_BASE = [
  {
    keywords: ['ferry', 'boat', 'schedule', 'hagnaya', 'port', 'get there', 'how to go', 'how to reach', 'travel time'],
    answer: "Ferries run between Hagnaya Port (mainland Cebu) and Santa Fe Port (Bantayan) roughly every 2 hours from 5:00 AM, taking about 1 to 1.5 hours. Fare is around \u20B1300. Check the Ferry Schedule section above for the full timetable."
  },
  {
    keywords: ['fare', 'ferry price', 'ticket price', 'ferry cost'],
    answer: "The Hagnaya to Santa Fe ferry costs approximately \u20B1300 per passenger. Direct buses from Cebu City that drive straight onto the ferry are also available."
  },
  {
    keywords: ['kota beach', 'kota'],
    answer: "Kota Beach in Santa Fe is considered one of the island's most picturesque beaches, known for its turquoise sandbar that's most pronounced in summer. It fronts Kota Beach Resort."
  },
  {
    keywords: ['ogtong', 'cave'],
    answer: "Ogtong Cave Pool is a natural freshwater cave pool inside Ogtong Cave Resort in Santa Fe, reached by a stone stairway. Entrance fee for day visitors is roughly \u20B1100 to \u20B1200."
  },
  {
    keywords: ['sugar beach'],
    answer: "Sugar Beach is a wide, quiet stretch of white sand west of Kota Beach, lined with coconut palms — good for camping and a slower pace."
  },
  {
    keywords: ['paradise beach'],
    answer: "Paradise Beach is a secluded, pristine beach reached by a short 10 to 15 minute trail off the main road — many locals consider it the most beautiful beach on the island."
  },
  {
    keywords: ['virgin island'],
    answer: "Virgin Island, also called Silion Island, is reached by boat and known for aquamarine water, wide white sand, and a cliff-jumping spot on its northwestern edge."
  },
  {
    keywords: ['hilantagaan'],
    answer: "Hilantagaan Island is the larger of two islets off the eastern coast, about a 20-minute boat ride away, with a protected snorkeling area and a sandbar."
  },
  {
    keywords: ['island hopping', 'island tour', 'boat tour'],
    answer: "Popular island hopping stops include Virgin Island, Hilantagaan Island, Botigues Island, and Polo-polo Island — usually arranged as a half-day or full-day boat tour from Santa Fe."
  },
  {
    keywords: ['church', 'peter', 'paul', 'belfry'],
    answer: "Saints Peter and Paul Church in Bantayan town is one of the oldest churches in the Visayas. You can climb the belfry for a rooftop view over the town."
  },
  {
    keywords: ['mangrove', 'obo-ob', 'obo ob'],
    answer: "Obo-ob Mangrove Eco Park is a community-managed mangrove forest you can explore by boat, kayak, or elevated bamboo walkway. Entrance fee is around \u20B150."
  },
  {
    keywords: ['fort', 'ruins', 'kota park', 'watchtower'],
    answer: "Kota Park in Madridejos holds the ruins of a Spanish-era fort and watchtower, right along the coastline with clear, shallow water nearby."
  },
  {
    keywords: ['food', 'eat', 'restaurant', 'danggit', 'sutukil', 'seafood'],
    answer: "Bantayan is known for danggit (dried fish), SuTuKil-style seafood (grilled, boiled, or raw marinated), and Holy Week lechon. MJ Square in Santa Fe is the main food hub."
  },
  {
    keywords: ['budget', 'cost', 'expensive', 'how much', 'money', 'price'],
    answer: "A rough daily budget is \u20B1700 for backpacker style, \u20B11,500 for mid-range, or \u20B13,000+ for comfort, per person per day. Use the Budget Estimator section above for a total based on your trip."
  },
  {
    keywords: ['best time', 'when to visit', 'weather', 'season', 'typhoon', 'rain'],
    answer: "Dry season, December to April, has calm seas and clear skies and is the best time to visit. May to November is the wet season, with rougher seas that can affect ferry schedules."
  },
  {
    keywords: ['itinerary', 'plan', 'days', 'how many days'],
    answer: "Most visitors spend 2 to 3 days on Bantayan. Use the Itinerary Planner section above to build your own list of places to visit."
  },
  {
    keywords: ['transport', 'tricycle', 'habal', 'motorbike', 'getting around', 'rent'],
    answer: "Tricycles and habal-habal (motorcycle taxis) are common around town. Renting a motorbike costs around \u20B1350 to \u20B1500 a day if you want to explore all three towns yourself."
  },
  {
    keywords: ['town', 'municipality', 'santa fe', 'madridejos', 'bantayan town'],
    answer: "Bantayan Island has three towns: Santa Fe is the tourism hub near the port, Bantayan town is the cultural and historical center, and Madridejos in the north holds the Kota Park ruins."
  },
  {
    keywords: ['mayor', 'leader', 'official', 'government', 'barangay captain'],
    answer: "As of the 2025-2028 term: Bantayan's mayor is Alex Layese, Santa Fe's mayor is Tamar Espinosa, and Madridejos's mayor is Romeo Villaceran. See the Local Leaders section above for details."
  },
  {
    keywords: ['airport', 'flight', 'fly', 'plane'],
    answer: "Bantayan Airport (RPSB) is a small community airport in Santa Fe with limited scheduled flights to Mactan-Cebu International Airport. Most visitors still arrive by ferry via Hagnaya Port."
  },
  {
    keywords: ['port', 'seaport', 'wharf'],
    answer: "Santa Fe Port is the island's main seaport, receiving ferries from Hagnaya Port on mainland Cebu. A larger port expansion with a passenger terminal and marina has been announced."
  },
  {
    keywords: ['map', 'municipalities', 'towns'],
    answer: "Bantayan Island has three municipalities: Santa Fe in the southeast (the tourism gateway), Bantayan town in the center, and Madridejos in the north. See the Map section above."
  },
  {
    keywords: ['hospital', 'medical', 'clinic', 'doctor'],
    answer: "Bantayan Island has local district-level medical facilities, but the nearest tertiary hospital care is in Cebu City, roughly four hours away by land and sea, or about 1.5 hours to a level-1 facility in Bogo."
  },
  {
    keywords: ['barangay', 'barangays', 'how many barangay'],
    answer: "Bantayan Island has 49 barangays total: 25 in Bantayan municipality, 10 in Santa Fe, and 14 in Madridejos. See the full Barangay Directory section above for the complete list."
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    answer: "Hello! Ask me about beaches, island hopping, the ferry schedule, food, budget, local officials, barangays, or getting to Bantayan Island."
  },
  {
    keywords: ['thank', 'thanks'],
    answer: "You're welcome! Enjoy your trip to Bantayan Island."
  }
];

const QUICK_QUESTIONS = [
  "How do I get to Bantayan Island?",
  "What is the ferry schedule?",
  "What are the best beaches?",
  "What food should I try?",
  "How much should I budget?",
  "When is the best time to visit?"
];

function findAnswer(userText){
  const text = userText.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  KNOWLEDGE_BASE.forEach(entry=>{
    entry.keywords.forEach(keyword=>{
      if(text.includes(keyword) && keyword.length > bestScore){
        bestScore = keyword.length;
        bestMatch = entry;
      }
    });
  });
  if(bestMatch) return bestMatch.answer;
  return "I don't have a specific answer for that yet, but I can help with beaches, island hopping, the ferry schedule, food, budget, or the best time to visit Bantayan Island. Try one of the quick questions below.";
}

function appendMessage(text, sender){
  const msg = document.createElement('div');
  msg.className = 'chat-msg ' + sender;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function renderQuickQuestions(){
  chatQuick.innerHTML = '';
  QUICK_QUESTIONS.forEach(question=>{
    const btn = document.createElement('button');
    btn.className = 'chat-quick-btn';
    btn.type = 'button';
    btn.textContent = question;
    btn.addEventListener('click', ()=>{
      handleUserMessage(question);
    });
    chatQuick.appendChild(btn);
  });
}

function handleUserMessage(text){
  if(!text.trim()) return;
  appendMessage(text, 'user');
  const answer = findAnswer(text);
  setTimeout(()=>{
    appendMessage(answer, 'bot');
  }, 300);
}

let chatStarted = false;
function openChat(){
  chatPanel.classList.add('open');
  chatPanel.setAttribute('aria-hidden', 'false');
  chatFab.setAttribute('aria-expanded', 'true');
  chatFab.classList.add('open');
  if(!chatStarted){
    chatStarted = true;
    appendMessage("Hi! I'm the Bantayan Island Assistant. Ask me anything about beaches, the ferry schedule, food, or budget — or tap one of the questions below to get started.", 'bot');
    renderQuickQuestions();
  }
  chatInput.focus();
}
function closeChat(){
  chatPanel.classList.remove('open');
  chatPanel.setAttribute('aria-hidden', 'true');
  chatFab.setAttribute('aria-expanded', 'false');
  chatFab.classList.remove('open');
}

chatFab.addEventListener('click', openChat);
chatClose.addEventListener('click', closeChat);
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeChat();
});

chatForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const value = chatInput.value;
  chatInput.value = '';
  handleUserMessage(value);
});
